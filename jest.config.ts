import type { Config } from "jest";

const config: Config = {
    verbose: true,
    moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/test/jest/__mocks__/styleMock.js",
    },
};

export default config;
