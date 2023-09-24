module.export = {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.jsx?$": "<rootDir>/.babelrc.js",
      '^.+\\.[jt]sx?$': 'babel-jest',

    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    globals: {
      "ts-jest": {
        tsconfig: "tsconfig.json",
        isolatedModules: true,
      },
    },
    extensionsToTreatAsEsm: [".ts"],
    testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  };
  