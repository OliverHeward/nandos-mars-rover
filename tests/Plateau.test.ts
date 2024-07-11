import { Plateau } from "../src/Plateau";

describe("Plateau", () => {
	test("Should initialise a Plateau with the correct dimensions", () => {
		const plateau = new Plateau(5, 5);
		expect(plateau.x).toBe(5);
		expect(plateau.y).toBe(5);
	});

	test("Should throw an error if the Plateau is initialised with one or more negative dimensions", () => {
		expect(() => new Plateau(-1, 5)).toThrow(
			"Coordinates for the Plataeu can not be negative."
		);
		expect(() => new Plateau(5, -1)).toThrow(
			"Coordinates for the Plataeu can not be negative."
		);
		expect(() => new Plateau(-1, -1)).toThrow(
			"Coordinates for the Plataeu can not be negative."
		);
	});
});
