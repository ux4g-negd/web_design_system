// rollup.config.mjs — ux4g-web-components
// Compiles src/types.ts → dist/types/index.mjs + dist/types/index.cjs
// Compiles src/runtime/index.ts → dist/runtime/index.mjs + dist/runtime/index.cjs (with vendor JS inlined)
// Compiles src/runtime/bootstrap.ts → dist/runtime/bootstrap.mjs + dist/runtime/bootstrap.cjs
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import { copyFileSync, existsSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Read source JS files at build time — these get inlined as string constants
const vendorMain = readFileSync(resolve(__dirname, '../../src/ux4g.js'), 'utf8');
const vendorCustom = readFileSync(resolve(__dirname, '../../src/ux4g-custom.js'), 'utf8');

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

// Runtime index config — inlines vendor JS as string constants
const runtimeIndexConfig = {
  input: 'src/runtime/index.ts',
  external: [],
  plugins: [
    replace({
      preventAssignment: true,
      delimiters: ['', ''],
      values: {
        '__UX4G_VENDOR_MAIN__': JSON.stringify(vendorMain),
        '__UX4G_VENDOR_CUSTOM__': JSON.stringify(vendorCustom),
      },
    }),
    typescript({
      tsconfig: './tsconfig.runtime.json',
    }),
  ],
  output: [
    { file: 'dist/runtime/index.mjs', format: 'esm' },
    { file: 'dist/runtime/index.cjs', format: 'cjs' },
  ],
};

// Runtime bootstrap config — inlines index.ts (with vendor JS) directly
const runtimeBootstrapConfig = {
  input: 'src/runtime/bootstrap.ts',
  external: [],
  plugins: [
    replace({
      preventAssignment: true,
      delimiters: ['', ''],
      values: {
        '__UX4G_VENDOR_MAIN__': JSON.stringify(vendorMain),
        '__UX4G_VENDOR_CUSTOM__': JSON.stringify(vendorCustom),
      },
    }),
    typescript({
      tsconfig: './tsconfig.runtime.json',
    }),
  ],
  output: [
    { file: 'dist/runtime/bootstrap.mjs', format: 'esm' },
    { file: 'dist/runtime/bootstrap.cjs', format: 'cjs' },
    { file: 'dist/runtime/bootstrap.js', format: 'iife' },
  ],
};

// Runtime design-system config — compiles bootstrap.ts into dist/runtime/design-system.* files
const runtimeDesignSystemConfig = {
  input: 'src/runtime/bootstrap.ts',
  external: [],
  plugins: [
    replace({
      preventAssignment: true,
      delimiters: ['', ''],
      values: {
        '__UX4G_VENDOR_MAIN__': JSON.stringify(vendorMain),
        '__UX4G_VENDOR_CUSTOM__': JSON.stringify(vendorCustom),
      },
    }),
    typescript({
      tsconfig: './tsconfig.runtime.json',
    }),
  ],
  output: [
    { file: 'dist/runtime/design-system.mjs', format: 'esm' },
    { file: 'dist/runtime/design-system.cjs', format: 'cjs' },
    { file: 'dist/runtime/design-system.js', format: 'iife' },
  ],
};

export default [typesConfig, runtimeIndexConfig, runtimeBootstrapConfig, runtimeDesignSystemConfig];
