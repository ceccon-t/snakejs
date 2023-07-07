import { Grid } from "../grid/Grid.js";
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
        // Initializing grid
        this.grid = new Grid(this.config.totalRows(), this.config.totalColumns());
        
        // Initializing snake
        const initialPositions = [new Position(9, 3), new Position(9, 4), new Position(9, 5)];
        const snake = new Snake(initialPositions);

        initialPositions.forEach(pos => {
            this.grid.setAt(pos.row(), pos.column(), ENTITY_TYPES.SNAKE);
            this.views.displayCellAs(pos.row(), pos.column(), ENTITY_TYPES.SNAKE);
        });

        this.snake = snake;

        // Initializing foods
        for (let i = 0; i < 3; i++) {
            this.addFood();
        }

    }

    addFood() {
        const cellsAvailable = this.grid.allAvailableCells();
        const randomIndex = Math.floor(Math.random() * cellsAvailable.length);
        const newFoodPosition = cellsAvailable[randomIndex];
        this.grid.setAt(newFoodPosition.row(), newFoodPosition.column(), ENTITY_TYPES.FOOD);
        this.views.displayCellAs(newFoodPosition.row(), newFoodPosition.column(), ENTITY_TYPES.FOOD);
    }

    _movePlayer() {
        const curHead = this.snake.getHead();
        const displacement = this.currentDirection.asDisplacement();
        const nextPos = curHead.move(displacement);

        if (!this.grid.withinBounds(nextPos.row(), nextPos.column())) {
            return;
        }

        const foundAtNextPos = this.grid.at(nextPos.row(), nextPos.column());

        // Head
        this.snake.moveHead(nextPos);
        this.grid.setAt(nextPos.row(), nextPos.column(), ENTITY_TYPES.SNAKE);
        this.views.displayCellAs(nextPos.row(), nextPos.column(), ENTITY_TYPES.SNAKE);

        if (foundAtNextPos === ENTITY_TYPES.FOOD) {
            this.addFood();
        } else {
            // Tail
            const clearedTail = this.snake.moveTail();
            this.grid.setAt(clearedTail.row(), clearedTail.column(), ENTITY_TYPES.EMPTY);
            this.views.displayCellAs(clearedTail.row(), clearedTail.column(), ENTITY_TYPES.EMPTY);
        }


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