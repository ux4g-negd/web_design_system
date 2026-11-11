import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';
import cssnano from 'cssnano';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define master import entry style content in correct CSS source order
const entryContent = `
@import "../../../src/reset/reset.css";
@import "../../../src/tokens/ux4g-tokens.css";
@import "../../../src/semantics/ux4g-semantic.css";
@import "../../../src/themes/dark.css";
@import "../../../src/foundations/ux4g.foundations.css";
@import "../../../src/utilities/ux4g-utilities.css";
@import "../../../src/components/ux4g.components.css";
@import "../../../src/patterns/ux4g-patterns.css";
@import "../../../src/layout/ux4g.layout.css";
`;

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

async function build() {
  const outputDir = path.resolve(__dirname, '../styles');
  const outputPath = path.join(outputDir, 'ux4g.css');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log("Compiling CSS bundle using PostCSS...");

  try {
    const result = await postcss([
      postcssImport({
        resolve: resolveImport
      }),
      postcssUrl({
        url: 'inline', // Inline all assets to ensure a self-contained bundle
        maxSize: 10240 // 10MB limit to cover all fonts and images
      }),
      cssnano({
        preset: 'default',
      })
    ]).process(entryContent, {
      from: __filename,
      to: outputPath
    });

    fs.writeFileSync(outputPath, result.css);
    console.log(`CSS Bundle compiled successfully to: ${outputPath} (${result.css.length} bytes)`);
  } catch (error) {
    console.error("PostCSS compilation failed:", error);
    process.exit(1);
  }
}

build();
