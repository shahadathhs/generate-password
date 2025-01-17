/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/**/*.test.ts'],
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true,
  forceExit: true,
  detectOpenHandles: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  testTimeout: 40000,
  maxWorkers: 3,
  silent: false
}
