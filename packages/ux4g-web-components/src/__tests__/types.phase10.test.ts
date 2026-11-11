// src/__tests__/types.phase10.test.ts
// Unit tests for all Phase 10 build functions
// Requirements: 6.10, 6.11, 6.12, 6.13, 6.14, 6.15, 6.16, 6.17, 6.18, 6.19

import {
  buildSlotGridClasses,
  buildFooterClasses,
  buildResultListRowClasses,
} from '../../src/types';

// ── SlotGrid ──────────────────────────────────────────────────────────────────
describe('buildSlotGridClasses', () => {
  it("no args -> 'ux4g-time-slot-weekly-container'", () => {
    expect(buildSlotGridClasses()).toBe('ux4g-time-slot-weekly-container');
  });
  it("variant='weekly' -> 'ux4g-time-slot-weekly-container'", () => {
    expect(buildSlotGridClasses('weekly')).toBe('ux4g-time-slot-weekly-container');
  });
  it("variant='compact' -> 'ux4g-time-slot-compact-container'", () => {
    expect(buildSlotGridClasses('compact')).toBe('ux4g-time-slot-compact-container');
  });
  it("variant='weekly' with extra -> 'ux4g-time-slot-weekly-container my'", () => {
    expect(buildSlotGridClasses('weekly', 'my')).toBe('ux4g-time-slot-weekly-container my');
  });
  it("variant='compact' with extra -> 'ux4g-time-slot-compact-container my'", () => {
    expect(buildSlotGridClasses('compact', 'my')).toBe('ux4g-time-slot-compact-container my');
  });
});

// ── Footer ────────────────────────────────────────────────────────────────────
describe('buildFooterClasses', () => {
  it("no args -> ''", () => {
    expect(buildFooterClasses()).toBe('');
  });
  it("theme='default' -> ''", () => {
    expect(buildFooterClasses('default')).toBe('');
  });
  it("theme='primary' -> 'ux4g-footer-primary'", () => {
    expect(buildFooterClasses('primary')).toBe('ux4g-footer-primary');
  });
  it("theme='dark' -> 'ux4g-footer-dark'", () => {
    expect(buildFooterClasses('dark')).toBe('ux4g-footer-dark');
  });
  it("theme='primary' with extra -> 'ux4g-footer-primary extra'", () => {
    expect(buildFooterClasses('primary', 'extra')).toBe('ux4g-footer-primary extra');
  });
  it("theme='dark' with extra -> 'ux4g-footer-dark extra'", () => {
    expect(buildFooterClasses('dark', 'extra')).toBe('ux4g-footer-dark extra');
  });
  it("theme='default' with extra -> 'extra'", () => {
    expect(buildFooterClasses('default', 'extra')).toBe('extra');
  });
});

// ── ResultListRow ─────────────────────────────────────────────────────────────
describe('buildResultListRowClasses', () => {
  it("no args -> 'ux4g-result-list'", () => {
    expect(buildResultListRowClasses()).toBe('ux4g-result-list');
  });
  it("variation='default' -> 'ux4g-result-list'", () => {
    expect(buildResultListRowClasses('default')).toBe('ux4g-result-list');
  });
  it("variation='v1' -> 'ux4g-result-list ux4g-result-list-v1'", () => {
    expect(buildResultListRowClasses('v1')).toBe('ux4g-result-list ux4g-result-list-v1');
  });
  it("variation='v2' -> 'ux4g-result-list ux4g-result-list-v2'", () => {
    expect(buildResultListRowClasses('v2')).toBe('ux4g-result-list ux4g-result-list-v2');
  });
  it("variation='v3' -> 'ux4g-result-list ux4g-result-list-v3'", () => {
    expect(buildResultListRowClasses('v3')).toBe('ux4g-result-list ux4g-result-list-v3');
  });
  it("variation='v4' -> 'ux4g-result-list ux4g-result-list-v4'", () => {
    expect(buildResultListRowClasses('v4')).toBe('ux4g-result-list ux4g-result-list-v4');
  });
  it("variation='v5' -> 'ux4g-result-list ux4g-result-list-v5'", () => {
    expect(buildResultListRowClasses('v5')).toBe('ux4g-result-list ux4g-result-list-v5');
  });
  it("variation='v3' with extra -> 'ux4g-result-list ux4g-result-list-v3 extra'", () => {
    expect(buildResultListRowClasses('v3', 'extra')).toBe('ux4g-result-list ux4g-result-list-v3 extra');
  });
  it("variation='v5' with extra -> 'ux4g-result-list ux4g-result-list-v5 extra'", () => {
    expect(buildResultListRowClasses('v5', 'extra')).toBe('ux4g-result-list ux4g-result-list-v5 extra');
  });
});
