import { Plateau } from "../src/Plateau";
import { Rover } from "../src/Rover";

describe("Rover", () => {
	let plateau: Plateau;

	beforeEach(() => {
		plateau = new Plateau(5, 5);
	});

	test("Should initialise a Rover with a correct position and orientation for the Plateau it sits on.", () => {
		const rover = new Rover(1, 2, "N", plateau);
		expect(rover.getPosition()).toBe("1 2 N");
	});

	test("Should rotate the Rover 90 degrees to the Left.", () => {
		const rover = new Rover(1, 2, "N", plateau);
		rover.controlRover("L");
		expect(rover.getPosition()).toBe("1 2 W");
	});
	test("Should rotate the Rover 90 degrees to the Right.", () => {
		const rover = new Rover(1, 2, "N", plateau);
		rover.controlRover("R");
		expect(rover.getPosition()).toBe("1 2 E");
	});
	test("Should move the Rover 1 space Forward, in the direction it currently faces.", () => {
		const rover = new Rover(1, 2, "N", plateau);
		rover.controlRover("M");
		expect(rover.getPosition()).toBe("1 3 N");
	});

	test("Should not create a Rover is provided a negative co-ordinate", () => {
		expect(() => new Rover(-1, 2, "N", plateau)).toThrow(
			"Rover can not be provided a co-ordinate outside of the plateau."
		);
		expect(() => new Rover(1, 8, "N", plateau)).toThrow(
			"Rover can not be provided a co-ordinate outside of the plateau."
		);
		expect(() => new Rover(-4, 8, "N", plateau)).toThrow(
			"Rover can not be provided a co-ordinate outside of the plateau."
		);
	});

	test("Should execute a Command String correctly.", () => {
		const rover = new Rover(1, 2, "N", plateau);
		rover.controlRover("LMLMLMLMM");
		expect(rover.getPosition()).toBe("1 3 N");
	});
	test("Should not move out of the Plateau boundaries.", () => {
		const rover = new Rover(1, 2, "N", plateau);
		expect(() => rover.controlRover("MMMMMMM")).toThrow(
			"Rover attempted to move out of bounds. Please check the Command String against the Plateau this Rover is assigned."
		);
	});
});
