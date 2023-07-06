import { ENTITY_TYPES } from "../entityTypes/EntityTypes.js";

const _entityTypeToCssClass = (type) => {
    if (type === ENTITY_TYPES.SNAKE) {
        return 'snake';
    } else if (type === ENTITY_TYPES.FOOD) {
        return 'food';
    } else {
        return '';
    }
}

class Views {

    constructor(config) {
        this.totalRows = config.totalRows();
        this.totalColumns = config.totalColumns();

        this.mainGridElement = document.getElementById('main_grid');

        // Keep grid representation in memory
        this.cells = new Array(this.totalRows);
        for (let i = 0; i < this.totalColumns; i++) {
            this.cells[i] = new Array(this.totalColumns);
        }

    }

    _getCellId(row, col) {
        return 'cell-' + row + '-' + col;
    }

    initializeGrid() {
        for(let row = 0; row < this.totalRows; row++) {
            for (let col = 0; col < this.totalColumns; col++) {
                const cellId = this._getCellId(row, col);

                const cellElement = document.createElement('div');
                cellElement.setAttribute('id', cellId);

                this.mainGridElement.appendChild(cellElement);
                this.cells[row][col] = cellElement;
            }
        }
    }

    displayCellAs(row, col, type) {
        this.cells[row][col].setAttribute('class', _entityTypeToCssClass(type));
    }

}

export {
    Views
}