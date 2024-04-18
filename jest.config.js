module.exports = {
    verbose: true,
    collectCoverage: true,
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
    coverageReporters: ["text", "lcov"],
  };