import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';
import cssnano from 'cssnano';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The same entry the CDN and Storybook use, so the package keeps their cascade
// layers and order. A separate unlayered list here made components override
// utilities and rendered about a thousand elements differently.
const entryContent = `@import "../../../src/index.css";`;

const resolveImport = (id, basedir, importOptions) => {
  if (id.startsWith('.')) {
    const absPath = path.resolve(basedir, id);
    if (fs.existsSync(absPath)) {
      return absPath;
    }

    const srcDir = path.resolve(__dirname, '../../../src');
    
    // Resolve utility imports from src/utilities/ using name mapping
    if (basedir.includes('utilities')) {
      const filename = path.basename(id, '.css');
      const utilPath = path.join(srcDir, 'utilities', `${filename}-utilities.css`);
      if (fs.existsSync(utilPath)) {
        return utilPath;
      }
    }
    
    // Resolve component imports from src/components/
    if (basedir.includes('components')) {
      const compPath = path.join(srcDir, 'components', id);
      if (fs.existsSync(compPath)) {
        return compPath;
      }
    }
    
    // Generic fallback to src/
    const fallbackPath = path.resolve(srcDir, id);
    if (fs.existsSync(fallbackPath)) {
      return fallbackPath;
    }
  }
  return id;
};

const OUTPUT_DIR = path.resolve(__dirname, '../styles');
const OUTPUT_PATH = path.join(OUTPUT_DIR, 'ux4g.css');
const ASSETS_DIR = path.join(OUTPUT_DIR, 'assets');
const SRC_ASSETS = path.resolve(__dirname, '../../../src/assets');

// --check rebuilds in memory and fails if the committed bundle is stale.
const CHECK = process.argv.includes('--check');

// Font licences (the OFL requires one to travel with the files).
const LICENCE = /^(ofl|licen[cs]e)\b/i;
const assetDirs = new Set();

/**
 * Copies a referenced asset next to the stylesheet and returns its new URL.
 * Embedded, remote and fragment references are left as they are.
 */
function copyAsset(asset) {
  const url = asset.url ?? '';
  // %23 is an encoded '#', an SVG fragment reference.
  if (!url || /^(data:|https?:|\/\/|#|%23)/i.test(url)) return url;

  const from = asset.absolutePath;
  if (!from || !fs.existsSync(from)) {
    throw new Error(`build-css: asset not found for url(${url})`);
  }

  // Mirror the src/assets layout so names cannot collide.
  const rel = path.relative(SRC_ASSETS, from);
  if (rel.startsWith('..') || path.isAbsolute(rel)) {
    throw new Error(`build-css: ${from} is outside src/assets`);
  }

  if (!CHECK) {
    const dest = path.join(ASSETS_DIR, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(from, dest);
    assetDirs.add(path.dirname(from));
  }

  return 'assets/' + rel.split(path.sep).join('/') + (asset.search || '') + (asset.hash || '');
}

/**
 * The package ships Noto Sans only, so a remote @import (the brand themes'
 * Google Fonts) is dropped. It would make every page request a third party,
 * trip strict CSPs, and Next.js rewrites every url() in a stylesheet that
 * contains one to an unloadable webpack:/// path.
 */
const dropRemoteImports = {
  postcssPlugin: 'drop-remote-imports',
  AtRule: {
    import(rule) {
      if (/^\s*(url\(\s*)?["']?(https?:)?\/\//i.test(rule.params)) {
        console.warn(`build-css: dropped remote @import ${rule.params}`);
        rule.remove();
      }
    },
  },
};

function copyLicences() {
  for (const dir of assetDirs) {
    for (const name of fs.readdirSync(dir).filter((f) => LICENCE.test(f))) {
      fs.copyFileSync(path.join(dir, name), path.join(ASSETS_DIR, path.relative(SRC_ASSETS, dir), name));
    }
  }
}

async function build() {
  if (!CHECK) {
    fs.rmSync(ASSETS_DIR, { recursive: true, force: true });
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log("Compiling CSS bundle using PostCSS...");

  try {
    const result = await postcss([
      postcssImport({
        resolve: resolveImport
      }),
      dropRemoteImports,
      // Copied rather than inlined: base64 fonts made the stylesheet ~8MB and
      // render-blocking, with nothing separately cacheable.
      postcssUrl({ url: copyAsset }),
      cssnano({
        preset: 'default',
      })
    ]).process(entryContent, {
      from: __filename,
      to: OUTPUT_PATH
    });

    if (CHECK) {
      // A checkout may have converted line endings; content is what matters.
      const norm = (s) => s.replace(/\r\n/g, '\n');
      const read = (f) => (fs.existsSync(f) ? norm(fs.readFileSync(f, 'utf8')) : '');
      if (read(OUTPUT_PATH) !== norm(result.css)) {
        console.error('styles/ is out of date with src/. Run "npm run build:css".');
        process.exit(1);
      }
      console.log('styles/ is up to date.');
      return;
    }

    fs.writeFileSync(OUTPUT_PATH, result.css);
    copyLicences();
    console.log(`CSS Bundle compiled successfully to: ${OUTPUT_PATH} (${result.css.length} bytes)`);
  } catch (error) {
    console.error("PostCSS compilation failed:", error);
    process.exit(1);
  }
}

build();
