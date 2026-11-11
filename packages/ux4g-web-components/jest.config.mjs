/** @type {import('jest').Config} */
const config = {
  projects: [
    {
      displayName: 'node',
      testEnvironment: 'node',
      transform: {
        '^.+\\.tsx?$': ['ts-jest', {
          tsconfig: {
            module: 'CommonJS',
            moduleResolution: 'node',
          },
        }],
      },
      testMatch: [
        '<rootDir>/src/__tests__/types.test.ts',
        '<rootDir>/src/__tests__/types.phase3.test.ts',
        '<rootDir>/src/__tests__/types.phase3.property.test.ts',
        '<rootDir>/src/__tests__/types.phase4.test.ts',
        '<rootDir>/src/__tests__/types.phase4.property.test.ts',
        '<rootDir>/src/__tests__/types.phase5.test.ts',
        '<rootDir>/src/__tests__/types.phase5.property.test.ts',
        '<rootDir>/src/__tests__/types.phase6.test.ts',
        '<rootDir>/src/__tests__/types.phase6.property.test.ts',
        '<rootDir>/src/__tests__/types.phase7.test.ts',
        '<rootDir>/src/__tests__/types.phase7.property.test.ts',
        '<rootDir>/src/__tests__/types.phase8.test.ts',
        '<rootDir>/src/__tests__/types.phase8.property.test.ts',
        '<rootDir>/src/__tests__/types.phase9.test.ts',
        '<rootDir>/src/__tests__/types.phase9.property.test.ts',
        '<rootDir>/src/__tests__/types.phase10.test.ts',
        '<rootDir>/src/__tests__/types.phase10.property.test.ts',
        '<rootDir>/src/__tests__/types.restructure.property.test.ts',
        '<rootDir>/src/__tests__/megamenu.classbuilder.property.test.ts',
        '<rootDir>/src/__tests__/css-bundle.*.test.ts',
        '<rootDir>/src/__tests__/smoke.test.ts',
      ],
    },
  ],
};

export default config;
