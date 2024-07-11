import logger from "./logger";

export class Plateau {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		if (x < 0 || y < 0) {
			throw new Error("Coordinates for the Plataeu can not be negative.");
		}
		this.x = x;
		this.y = y;
		logger.info(`Plateau created with dimensions: ${x}, ${y}`);
	}
}
