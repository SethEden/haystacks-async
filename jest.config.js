export default {
    modulePathIgnorePatterns: [
      "./test/unitTest/testData/testTemp/tempPluginRegistryTest*.json",
      "./test/unitTest/testData/resources/jsonTestData/*.json",
      "./test/unitTest/testData/resources/plugins/plugins.json"
    ],
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts",
    ],
    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",
    // An array of file extensions your modules use
    moduleFileExtensions: [
      "js",
      "jsx",
      "ts",
      "tsx",
      "json",
      "node",
    ],
    // The test environment that will be used for testing
    testEnvironment: "jsdom",
    // The glob patterns Jest uses to detect test files
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[tj]s?(x)",
    ],
    // A map from regular expressions to paths to transformers
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
      "^.+\\.css$": "jest-transform-css",
    },
    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transformIgnorePatterns: [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    ],
    verbose: true,

    // Enable or Disable unit test files. (commented out - enabled | not commented - disabled)
    testPathIgnorePatterns: [
      "<rootDir>/test/unitTest/tests/brokers/commandBroker.test.js",
      "<rootDir>/test/unitTest/tests/brokers/constantBroker.test.js",
      "<rootDir>/test/unitTest/tests/brokers/dataBroker.test.js",
      "<rootDir>/test/unitTest/tests/brokers/pluginBroker.test.js",
      "<rootDir>/test/unitTest/tests/brokers/ruleBroker.test.js",
      "<rootDir>/test/unitTest/tests/brokers/themeBroker.test.js",
      "<rootDir>/test/unitTest/tests/brokers/workflowBroker.test.js",
      "<rootDir>/test/unitTest/tests/businessRules/arrayParsing/auxiliaryArrayParsing.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/arrayParsing/characterArrayParsing.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/arrayParsing/commandArrayParsing.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/arrayParsing/constantArrayParsing.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/arrayParsing/dataArrayParsing.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/arrayParsing/pathArrayParsing.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/arrayParsing/wordArrayParsing.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/stringParsing/auxilaryStringParsing.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/stringParsing/characterStringParsing.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/stringParsing/commandStringParsing.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/stringParsing/constantStringParsing.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/stringParsing/dataStringParsing.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/stringParsing/pathStringParsing.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/stringParsing/wordStringParsing.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/characterGeneration.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/fileOperations.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/lexicalAnalyzer.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/mathOperations.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/promptOperations.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/ruleParsing.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/stringGeneration.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/stringParsingUtilities.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/timeComputation.test.js",
      // "<rootDir>/test/unitTest/tests/businessRules/rulesLibrary.test.js",
      "<rootDir>/test/unitTest/tests/main.test.js"
    ],
  };
  