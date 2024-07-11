import "dotenv/config";
import logger from "./logger";
import { Plateau } from "./Plateau";

type Direction = "N" | "E" | "S" | "W";

interface Movement {
	axis: "x" | "y";
	increment: number;
	boundary: () => boolean;
}

const counterClockwise: Record<Direction, Direction> = {
	N: "W",
	W: "S",
	S: "E",
	E: "N",
};

const clockwise: Record<Direction, Direction> = {
	N: "E",
	E: "S",
	S: "W",
	W: "N",
};

/**
 * Represents a NASA Rover Robot that can move within it's given Plateau.
 *
 * @class Rover
 * @constructor
 * Creates an instance of Rover.
 *
 * @param {number} x - The x-coordinate of the Rover's position.
 * @param {number} y - The y-coordinate of the Rover's position.
 * @param {Direction} orientation - The orientation of the Rover (N, E, S, W).
 * @param {Plateau} plateau - The Plateau object on which the Rover is allocated to move.
 *
 * @method turnLeft - Turns the Rover to the Left based on its current orientation.
 * @method turnRight - Turns the Rover to the Right based on its current orientation.
 * @method move - Moves the Rover within the Plateau based on its current orientation.
 * @method controlRover - Controls the Rover's movement based on a string of commands (L, R, M).
 * @method getPosition - Retrieves the current position and orientation of the Rover.
 */

export class Rover {
	x: number;
	y: number;
	orientation: Direction;
	private plateau: Plateau;

	constructor(x: number, y: number, orientation: Direction, plateau: Plateau) {
		if (x > plateau.x || y > plateau.y || y < 0 || x < 0) {
			throw new Error(
				"Rover can not be provided a co-ordinate outside of the plateau."
			);
		}

		this.x = x;
		this.y = y;
		this.orientation = orientation;
		this.plateau = plateau;
	}

	private turnLeft(): void {
		this.orientation = counterClockwise[this.orientation];
	}
	private turnRight(): void {
		this.orientation = clockwise[this.orientation];
	}

	private move(): void {
		const movements: { [key: string]: Movement } = {
			N: { axis: "y", increment: 1, boundary: () => this.y < this.plateau.y },
			E: { axis: "x", increment: 1, boundary: () => this.x < this.plateau.x },
			S: { axis: "y", increment: -1, boundary: () => this.y >= 0 },
			W: { axis: "x", increment: -1, boundary: () => this.x >= 0 },
		};

		const movement = movements[this.orientation];
		if (movement.boundary()) {
			this[movement.axis] += movement.increment;
		} else {
			logger.error(
				`Rover attempted to move out of bounds from ${this.x}, ${this.y}.`
			);
			throw new Error(
				`Rover attempted to move out of bounds. Please check the Command String against the Plateau this Rover is assigned.`
			);
		}
	}

	public controlRover(commands: string): void {
		for (const command of commands) {
			if (command === "L") this.turnLeft();
			if (command === "R") this.turnRight();
			if (command === "M") this.move();
		}
	}

	public getPosition(): string {
		return `${this.x} ${this.y} ${this.orientation}`;
	}
}
