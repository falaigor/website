module.exports = {
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests_utils/setupTests.ts"],
  testEnvironment: "jsdom",
  collectCoverageFrom: ["<rootDir>/src/**/*.(ts|tsx)"],
  coveragePathIgnorePatterns: ["<rootDir>/src/pages/_app.tsx"],
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "ts-jest",
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
  },
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/src/tests_utils/empty-module.js",
    "\\.png$": "<rootDir>/src/tests_utils/empty-module.js",
  },
};
