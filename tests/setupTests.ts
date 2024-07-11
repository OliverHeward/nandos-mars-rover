// Mute logger for test runs
jest.mock("../src/logger", () => ({
	error: jest.fn(),
	warn: jest.fn(),
	info: jest.fn(),
	debug: jest.fn(),
}));
