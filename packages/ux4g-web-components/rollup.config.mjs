// rollup.config.mjs — ux4g-web-components
// Compiles src/types.ts → dist/types/index.mjs + dist/types/index.cjs
// Compiles src/runtime/index.ts → dist/runtime/index.{mjs,cjs}, with ux4g.js and
//   ux4g-custom.js bundled in as module code
// Compiles src/runtime/bootstrap.ts → dist/runtime/{bootstrap,design-system}.{mjs,cjs,js}
import typescript from '@rollup/plugin-typescript';
import esbuild from 'esbuild';
import { copyFileSync, existsSync, readFileSync, rmSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(__dirname, '../../src');
const VENDOR_ID = 'virtual:ux4g-vendor';

const clean = {
  name: 'clean',
  buildStart() {
    rmSync(resolve(__dirname, 'dist'), { recursive: true, force: true });
  },
};

/**
 * Exposes ux4g.js + ux4g-custom.js as `runVendor()`. They are classic scripts,
 * so their top-level declarations used to be page globals; inside a module
 * they would not be. Each one is mirrored onto `window` to keep that contract:
 * functions before the code runs (classic scripts hoist them), everything else
 * after.
 */
function vendor() {
  return {
    name: 'ux4g-vendor',
    resolveId(id) {
      return id === VENDOR_ID ? '\0' + VENDOR_ID : null;
    },
    load(id) {
      if (id !== '\0' + VENDOR_ID) return null;

      const core = readFileSync(resolve(SRC, 'ux4g.js'), 'utf8');
      const custom = readFileSync(resolve(SRC, 'ux4g-custom.js'), 'utf8');
      this.addWatchFile(resolve(SRC, 'ux4g.js'));
      this.addWatchFile(resolve(SRC, 'ux4g-custom.js'));

      const hoisted = [];
      const lexical = [];
      for (const node of this.parse(custom).body) {
        if (node.type === 'FunctionDeclaration') hoisted.push(node.id.name);
        else if (node.type === 'ClassDeclaration') lexical.push(node.id.name);
        else if (node.type === 'VariableDeclaration') {
          for (const d of node.declarations) {
            if (d.id.type !== 'Identifier') {
              this.error(`ux4g-custom.js: destructured top-level declaration at ${d.start} cannot be exposed`);
            }
            lexical.push(d.id.name);
          }
        }
      }
      const expose = (names) => names.map((n) => `window.${n} = ${n};`).join('\n');

      return [
        'export function runVendor() {',
        core,
        ';',
        expose(hoisted),
        custom,
        ';',
        expose(lexical),
        '}',
      ].join('\n');
    },
  };
}

const minify = {
  name: 'minify',
  async renderChunk(code, _chunk, options) {
    const result = await esbuild.transform(code, {
      minify: true,
      format: options.format === 'es' ? 'esm' : undefined,
      legalComments: 'none',
    });
    return { code: result.code, map: null };
  },
};

const runtimePlugins = () => [
  vendor(),
  typescript({ tsconfig: './tsconfig.runtime.json' }),
  minify,
];

// bootstrap.ts imports ./index.js. The ESM and CJS builds keep that import, so
// an app that uses both entry points carries one copy of the runtime, not two.
const isIndex = (id) => /(^\.\/index\.js$)|([\\/]src[\\/]runtime[\\/]index\.(js|ts)$)/.test(id);
const sideEffectEntry = (name) => [
  {
    input: 'src/runtime/bootstrap.ts',
    external: isIndex,
    plugins: runtimePlugins(),
    output: [
      { file: `dist/runtime/${name}.mjs`, format: 'esm', paths: (id) => (isIndex(id) ? './index.mjs' : id) },
      { file: `dist/runtime/${name}.cjs`, format: 'cjs', paths: (id) => (isIndex(id) ? './index.cjs' : id) },
    ],
  },
  {
    // Standalone build for a plain <script src>.
    input: 'src/runtime/bootstrap.ts',
    plugins: runtimePlugins(),
    output: { file: `dist/runtime/${name}.js`, format: 'iife' },
  },
];

// Plugin to rename dist/types/types.d.ts → dist/types/index.d.ts after build
const renameDts = {
  name: 'rename-dts',
  writeBundle() {
    const src = resolve(__dirname, 'dist/types/types.d.ts');
    const dest = resolve(__dirname, 'dist/types/index.d.ts');
    if (existsSync(src)) {
      copyFileSync(src, dest);
    }
  },
};

// Types config (existing)
const typesConfig = {
  input: 'src/types.ts',
  external: [],
  plugins: [
    clean,
    typescript({
      tsconfig: './tsconfig.rollup.json',
    }),
    renameDts,
  ],
  output: [
    { file: 'dist/types/index.mjs', format: 'esm' },
    { file: 'dist/types/index.cjs', format: 'cjs' },
  ],
};

const runtimeIndexConfig = {
  input: 'src/runtime/index.ts',
  plugins: runtimePlugins(),
  output: [
    { file: 'dist/runtime/index.mjs', format: 'esm' },
    { file: 'dist/runtime/index.cjs', format: 'cjs' },
  ],
};

export default [
  typesConfig,
  runtimeIndexConfig,
  ...sideEffectEntry('bootstrap'),
  ...sideEffectEntry('design-system'),
];
