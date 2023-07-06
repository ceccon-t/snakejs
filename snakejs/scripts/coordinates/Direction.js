import { Displacement } from "./Displacement.js";

const DIRS = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4,
}

class Direction {

    constructor(dir) {
        this.dir = dir;
    }

    isOpposite(otherDirection) {
        return (this.dir === DIRS.UP && otherDirection.dir === DIRS.DOWN)
                || (this.dir === DIRS.DOWN && otherDirection.dir === DIRS.UP)
                || (this.dir === DIRS.LEFT && otherDirection.dir === DIRS.RIGHT)
                || (this.dir === DIRS.RIGHT && otherDirection.dir === DIRS.LEFT);
    }

    asDisplacement() {
        switch(this.dir) {
            case DIRS.UP:
                return new Displacement(-1, 0);
            case DIRS.DOWN:
                return new Displacement(1, 0);
            case DIRS.LEFT:
                return new Displacement(0, -1);
            case DIRS.RIGHT:
                return new Displacement(0, 1);
        };
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