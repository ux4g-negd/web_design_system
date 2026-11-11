import * as fs from 'fs';
import * as path from 'path';

const PKG_ROOT = path.resolve(__dirname, '../..');

describe('ux4g-web-components smoke tests', () => {
  let pkg: Record<string, unknown>;

  beforeAll(() => {
    const pkgPath = path.join(PKG_ROOT, 'package.json');
    pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  });

  // --- package.json identity ---

  it('package name is "ux4g-web-components"', () => {
    expect(pkg.name).toBe('ux4g-web-components');
  });

  // --- exports shape ---

  it('exports["./styles.css"] exists and resolves to ./styles/ux4g.css', () => {
    const exports = pkg.exports as Record<string, unknown>;
    expect(exports).toBeDefined();
    const stylesCss = exports['./styles.css'] as Record<string, string>;
    expect(stylesCss).toBeDefined();
    expect(stylesCss['default']).toBe('./styles/ux4g.css');
  });

  it('exports["./types"] exists with types, import, require, default fields', () => {
    const exports = pkg.exports as Record<string, unknown>;
    const typesEntry = exports['./types'] as Record<string, string>;
    expect(typesEntry).toBeDefined();
    expect(typesEntry['types']).toBeDefined();
    expect(typesEntry['import']).toBeDefined();
    expect(typesEntry['require']).toBeDefined();
    expect(typesEntry['default']).toBeDefined();
  });

  // --- dist artifact existence ---

  it('styles/ux4g.css exists and has non-zero size', () => {
    const cssPath = path.join(PKG_ROOT, 'styles', 'ux4g.css');
    expect(fs.existsSync(cssPath)).toBe(true);
    expect(fs.statSync(cssPath).size).toBeGreaterThan(0);
  });

  it('dist/types/index.mjs exists', () => {
    expect(fs.existsSync(path.join(PKG_ROOT, 'dist', 'types', 'index.mjs'))).toBe(true);
  });

  it('dist/types/index.cjs exists', () => {
    expect(fs.existsSync(path.join(PKG_ROOT, 'dist', 'types', 'index.cjs'))).toBe(true);
  });

  it('dist/types/index.d.ts exists', () => {
    expect(fs.existsSync(path.join(PKG_ROOT, 'dist', 'types', 'index.d.ts'))).toBe(true);
  });

  // --- no cross-framework contamination ---

  it('has no react, react-dom, or @angular/* in any dependency field', () => {
    const depFields = [
      'dependencies',
      'devDependencies',
      'peerDependencies',
      'optionalDependencies',
    ] as const;

    const forbidden = ['react', 'react-dom'];

    for (const field of depFields) {
      const deps = (pkg[field] ?? {}) as Record<string, string>;
      for (const forbidden_pkg of forbidden) {
        expect(Object.keys(deps)).not.toContain(forbidden_pkg);
      }
      // No @angular/* keys
      const angularKeys = Object.keys(deps).filter((k) => k.startsWith('@angular/'));
      expect(angularKeys).toHaveLength(0);
    }
  });
});
