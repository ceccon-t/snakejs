import { Grid } from './Grid.js'
import { ENTITY_TYPES } from "../entityTypes/EntityTypes.js";

import { it, expect, describe } from "vitest";

describe('constructor', () => {

    it('should initialize with empty grid of correct size', () => {
        // Arrange
        const rows = 2;
        const cols = 2;
    
        // Act
        const grid = new Grid(rows, cols);
    
        // Assert
    
        // every cell in the space rows*cols has Empty entity
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const cell = grid.at(i, j);
                expect(cell).toEqual(ENTITY_TYPES.EMPTY);
            }
        }
    
        // will throw an error accessing something outside bounds
        expect(() => grid.at(rows, cols)).toThrowError();
    
    });

});

describe('setAt()', () => {
    it('should be able to set cell as snake', () => {
        // Arrange
        const rows = 5;
        const cols = 5;
        const grid = new Grid(rows, cols);
        const snakeRow = 3;
        const snakeCol = 2;

        // Act
        const typeBeforeSetting = grid.at(snakeRow, snakeCol);
        grid.setAt(snakeRow, snakeCol, ENTITY_TYPES.SNAKE);
        const typeAfterSetting = grid.at(snakeRow, snakeCol);

        // Assert
        expect(typeBeforeSetting).toEqual(ENTITY_TYPES.EMPTY);
        expect(typeAfterSetting).toEqual(ENTITY_TYPES.SNAKE);
    });

    it('should be able to set cell as food', () => {
        // Arrange
        const rows = 5;
        const cols = 5;
        const grid = new Grid(rows, cols);
        const foodRow = 1;
        const foodCol = 3;

        // Act
        const typeBeforeSetting = grid.at(foodRow, foodCol);
        grid.setAt(foodRow, foodCol, ENTITY_TYPES.FOOD);
        const typeAfterSetting = grid.at(foodRow, foodCol);

        // Assert
        expect(typeBeforeSetting).toEqual(ENTITY_TYPES.EMPTY);
        expect(typeAfterSetting).toEqual(ENTITY_TYPES.FOOD);
    });

    it('should be able to set cell as empty', () => {
        // Arrange
        const rows = 5;
        const cols = 5;
        const grid = new Grid(rows, cols);
        const emptyRow = 4;
        const emptyCol = 1;

        // Act
        grid.setAt(emptyRow, emptyCol, ENTITY_TYPES.SNAKE); 
        const typeBeforeSetting = grid.at(emptyRow, emptyCol);
        grid.setAt(emptyRow, emptyCol, ENTITY_TYPES.EMPTY);
        const typeAfterSetting = grid.at(emptyRow, emptyCol);

        // Assert
        expect(typeBeforeSetting).toEqual(ENTITY_TYPES.SNAKE);
        expect(typeAfterSetting).toEqual(ENTITY_TYPES.EMPTY);
    });

});

describe('withinBounds()', () => {

    it('should recognize cells inside grid and far from edge', () => {
        // Arrange
        const rows = 5;
        const cols = 5;
        const grid = new Grid(rows, cols);

        // Act && Assert
        for (let i = 1; i < rows-1; i++) {
            for (let j = 1; j < cols-1; j++) {
                expect(grid.withinBounds(i, j)).toEqual(true);
            }
        }
    });

    it('should recognize cells on the interior side of the edge', () => {
        // Arrange
        const rows = 5;
        const cols = 5;
        const grid = new Grid(rows, cols);

        // Act && Assert
        
        // upper and lower bounds
        for (let i = 0; i < cols; i++) {
            expect(grid.withinBounds(0, i)).toEqual(true); // upper
            expect(grid.withinBounds(rows-1, i)).toEqual(true); // lower
        }
        
        // left and right bound
        for (let i = 0; i < rows; i++) {
            expect(grid.withinBounds(i, 0)).toEqual(true); // left
            expect(grid.withinBounds(i, cols-1)).toEqual(true); // right
        }
    });

    it('should recognize cells outside of grid as out of bounds', () => {
        // Arrange
        const rows = 5;
        const cols = 5;
        const grid = new Grid(rows, cols);

        // Act && Assert
        
        // out of upper and lower bounds
        for (let i = 0; i < cols; i++) {
            expect(grid.withinBounds(-1, i)).toEqual(false); // upper
            expect(grid.withinBounds(rows, i)).toEqual(false); // lower
        }
        
        // out of left and right bound
        for (let i = 0; i < rows; i++) {
            expect(grid.withinBounds(i, -1)).toEqual(false); // left
            expect(grid.withinBounds(i, cols)).toEqual(false); // right
        }
    });

});

describe('allAvailableCells()', () => {
    it('should return all cells as available just after being initialized', () => {
        // Arrange
        const rows = 5;
        const cols = 5;
        const grid = new Grid(rows, cols);

        // Act
        const allAvailable = grid.allAvailableCells();

        // Assert
        allAvailable.length === rows*cols;
        allAvailable.forEach(c => expect(c).toEqual(ENTITY_TYPES.EMPTY));
    });

    it('should not return cell with snake as available', () => {
        // Arrange
        const rows = 5;
        const cols = 5;
        const grid = new Grid(rows, cols);
        const snakeRow = 2;
        const snakeCol = 4;
        grid.setAt(snakeRow, snakeCol, ENTITY_TYPES.SNAKE);

        // Act
        const allAvailable = grid.allAvailableCells();

        // Assert
        allAvailable.length === (rows*cols)-1;
        allAvailable.forEach(c => expect(c).toEqual(ENTITY_TYPES.EMPTY));
    });

    it('should not return cell with food as available', () => {
        // Arrange
        const rows = 5;
        const cols = 5;
        const grid = new Grid(rows, cols);
        const foodRow = 1;
        const foodCol = 0;
        grid.setAt(foodRow, foodCol, ENTITY_TYPES.FOOD);

        // Act
        const allAvailable = grid.allAvailableCells();

        // Assert
        allAvailable.length === (rows*cols)-1;
        allAvailable.forEach(c => expect(c).toEqual(ENTITY_TYPES.EMPTY));
    });

    it('should return cell that was cleared as available', () => {
        // Arrange
        const rows = 5;
        const cols = 5;
        const grid = new Grid(rows, cols);
        const onceASnakeRow = 2;
        const onceASnakeCol = 4;
        grid.setAt(onceASnakeRow, onceASnakeCol, ENTITY_TYPES.SNAKE);

        // Act
        grid.setAt(onceASnakeRow, onceASnakeCol, ENTITY_TYPES.EMPTY);
        const allAvailable = grid.allAvailableCells();

        // Assert
        allAvailable.length === rows*cols;
        allAvailable.forEach(c => expect(c).toEqual(ENTITY_TYPES.EMPTY));
    });

});
