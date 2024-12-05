import nextJest from "next/jest.js";

const createJestConfig = nextJest({
	dir: "./",
});

/** @type {import('jest').Config} */
const jestConfig = {
	clearMocks: true,
	collectCoverage: true,
	coverageProvider: "v8",
	moduleNameMapper: {
		"^~/(.*)$": "<rootDir>/app/$1",
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.mjs"],
	testEnvironment: "jsdom",
};

export default createJestConfig(jestConfig);
