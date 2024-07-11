import logger from "./logger";
import { Plateau } from "./Plateau";
import { Rover } from "./Rover";

const plateau = new Plateau(5, 5);

const rover1 = new Rover(1, 2, "N", plateau);
rover1.controlRover("LMLMLMLMM");

const rover2 = new Rover(3, 3, "E", plateau);
rover2.controlRover("MMRMMRMRRM");
logger.info(rover1.getPosition());
logger.info(rover2.getPosition());
