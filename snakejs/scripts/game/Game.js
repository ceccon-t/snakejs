import { Position } from "../coordinates/Position.js";
import { Snake } from "../snake/Snake.js";
import { ENTITY_TYPES } from "../entityTypes/EntityTypes.js";
import { Directions } from "../coordinates/Direction.js";

class Game {

    constructor(configuration, views) {
        this.config = configuration;
        this.views = views;

        this.currentDirection = Directions.right();
        this.nextDirection = this.currentDirection;

        this.views.initializeGrid();

        this._initializeGameState();

    }

    _initializeGameState() {
        // Initializing snake
        const initialPositions = [new Position(9, 3), new Position(9, 4), new Position(9, 5)];
        const snake = new Snake(initialPositions);

        initialPositions.forEach(pos => this.views.displayCellAs(pos.row(), pos.column(), ENTITY_TYPES.SNAKE));

        this.snake = snake;
    }

    _movePlayer() {
        const curHead = this.snake.getHead();
        const displacement = this.currentDirection.asDisplacement();
        const nextPos = curHead.move(displacement);

        if ((nextPos.row() < 0 || nextPos.row() >= this.config.totalRows())
            || (nextPos.column() < 0 || nextPos.column() >= this.config.totalColumns())) {
            return;
        }

        // Head
        this.snake.moveHead(nextPos);
        this.views.displayCellAs(nextPos.row(), nextPos.column(), ENTITY_TYPES.SNAKE);

        // Tail
        const clearedTail = this.snake.moveTail();
        this.views.displayCellAs(clearedTail.row(), clearedTail.column(), ENTITY_TYPES.EMPTY);
    }

    _tick() {
        this.currentDirection = this.nextDirection;
        
        this._movePlayer();
    }

    attemptChangingDirection(newDirection) {
        if (this.currentDirection.isOpposite(newDirection)) return;

        this._changeDirection(newDirection);
    }

    _changeDirection(newDirection) {
        this.nextDirection = newDirection;
    }

    start() {
        this.gameloop = setInterval(() => this._tick(), this.config.timeIncrement());
    }

}

export {
    Game
}