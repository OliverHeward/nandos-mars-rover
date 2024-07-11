import type { Config } from "jest";

export default async (): Promise<Config> => {
	return {
		preset: "ts-jest",
		testEnvironment: "node",
		moduleFileExtensions: ["ts", "js"],
		setupFilesAfterEnv: ["./tests/setupTests.ts"],
		testMatch: ["**/tests/**/*.test.ts"],
		transform: {
			"^.+\\.ts$": "ts-jest",
		},
	};
};
