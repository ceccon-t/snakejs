import { Displacement } from "./Displacement.js";

const DIRS = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4,
}

// For optimization: avoid recalculating constant values all the time
const OPPOSITES = {};
OPPOSITES[DIRS.UP] = DIRS.DOWN;
OPPOSITES[DIRS.DOWN] = DIRS.UP;
OPPOSITES[DIRS.LEFT] = DIRS.RIGHT;
OPPOSITES[DIRS.RIGHT] = DIRS.LEFT;

// For optimization: avoid recalculating constant values all the time
const DISPLACEMENTS = {};
DISPLACEMENTS[DIRS.UP] = new Displacement(-1, 0);
DISPLACEMENTS[DIRS.DOWN] = new Displacement(1, 0);
DISPLACEMENTS[DIRS.LEFT] = new Displacement(0, -1);
DISPLACEMENTS[DIRS.RIGHT] = new Displacement(0, 1);

class Direction {

    constructor(dir) {
        this.dir = dir;
        this.displacement = DISPLACEMENTS[this.dir];
    }

    isOpposite(otherDirection) {
        return OPPOSITES[this.dir] === otherDirection.dir;
    }

    asDisplacement() {
        return this.displacement;
    }

}

const UP = new Direction(DIRS.UP);
const DOWN = new Direction(DIRS.DOWN);
const LEFT = new Direction(DIRS.LEFT);
const RIGHT = new Direction(DIRS.RIGHT);

const Directions = {
    up: () => UP,
    down: () => DOWN,
    left: () => LEFT,
    right: () => RIGHT
};

export {
    Directions
}