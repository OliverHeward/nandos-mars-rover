import { Plateau } from '../src/Plateau';
import { Rover } from '../src/Rover';

describe('Rover Mission', () => {
	test('Should correctly initialise a mission for 2 Rovers on a Plateau and execute a mission command.', () => {
		const plateau = new Plateau(5, 5);
		const rover = new Rover(1, 2, 'N', plateau);
		const rover2 = new Rover(3, 3, 'E', plateau);

		rover.controlRover('LMLMLMLMM');
		rover2.controlRover('MMRMMRMRRM');

		expect(rover.getPosition()).toBe('1 3 N');
		expect(rover2.getPosition()).toBe('5 1 E');
	});
});
