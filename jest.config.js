module.exports = {
    preset: 'ts-jest',
    verbose: true,
    collectCoverageFrom: ['src/**/*.ts', 'src/*.ts', '!**/node_modules/**'],
    coverageReporters: ['html'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    coveragePathIgnorePatterns: ["<rootDir>/src/libs/"],
    coverageDirectory: './coverage/',
    testEnvironment: 'node',
    coverageThreshold: {
      global: {
        branches: 75,
        functions: 75,
        lines: 75,
        statements: 75,
      },
    },
    moduleNameMapper: {
      "^@config(.*)$": "<rootDir>/src/config$1",
      "^@utils(.*)$": "<rootDir>/src/utils$1",
      "^@handlers(.*)$": "<rootDir>/src/handlers$1",
      "^@repository(.*)$": "<rootDir>/src/repository$1",
      "^@usecases(.*)$": "<rootDir>/src/usecases$1"
    },
  };
  