import { createDefaultPreset, JestConfigWithTsJest } from "ts-jest";

const presetConfig = createDefaultPreset({ tsconfig: "./tsconfig.jest.json" });

const config: JestConfigWithTsJest = {
  ...presetConfig,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["/node_modules", "/test/e2e", "tests-examples"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;
