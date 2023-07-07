import { ENTITY_TYPES } from "../entityTypes/EntityTypes.js";
import { Position } from "../coordinates/Position.js";

class Grid {

    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;

        this.grid = [];
        for (let i = 0; i < rows; i++) {
            const currentRow = [];
            for (let j = 0; j < columns; j++) {
                currentRow[j] = ENTITY_TYPES.EMPTY;
            }
            this.grid[i] = currentRow;
        }
    }

    at(row, col) {
        return this.grid[row][col];
    }

    setAt(row, col, type) {
        this.grid[row][col] = type;
    }

    withinBounds(row, col) {
        return (row >= 0 && row < this.rows)
                && (col >= 0 && col < this.columns);
    }

    allAvailableCells() {
        const availables = [];
        
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                if (this.grid[i][j] === ENTITY_TYPES.EMPTY) { 
                    availables.push(new Position(i, j));
                }
            }
        }

        return availables;
    }

}

export {
    Grid
}