module.exports = {
  transform: {
    ".(ts|tsx)$": require.resolve("ts-jest/dist"),
    ".(js|jsx)$": require.resolve("babel-jest"), // jest's default
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}"],
  testEnvironment: "node",
  testMatch: ["<rootDir>/**/*.(spec|test).{ts,tsx,js,jsx}"],

  testEnvironmentOptions: {
    url: "http://localhost",
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
