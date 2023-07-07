import { GameOverScreen } from "./GameOverScreen.js";
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

        this.scoreElement = document.getElementById('score');
        this.bestScoreElement = document.getElementById('best_score');

        // Keep grid representation in memory
        this.cells = new Array(this.totalRows);
        for (let i = 0; i < this.totalColumns; i++) {
            this.cells[i] = new Array(this.totalColumns);
        }

        this.gameOverScreen = new GameOverScreen();

        config.isOnMobile() ? this._configureForMobile() : this._configureForDesktop();

    }

    _configureForMobile() {
        document.getElementById('ctn_app').classList.remove('desktop');
        document.getElementById('ctn_app').classList.add('mobile');

        document.getElementById('control-pad').classList.remove('desktop');
        document.getElementById('control-pad').classList.add('mobile');
    }

    _configureForDesktop() {
        document.getElementById('ctn_app').classList.remove('mobile');
        document.getElementById('ctn_app').classList.add('desktop');

        document.getElementById('control-pad').classList.remove('mobile');
        document.getElementById('control-pad').classList.add('desktop');
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

    updateScore(newScore) {
        this.scoreElement.innerHTML = newScore;
    }

    updateBestScore(newBestScore) {
        this.bestScoreElement.innerHTML = newBestScore;
    }

    showGameOverScreen() {
        this.gameOverScreen.open();
    }

    showGameOverScreenWithNewBestScore(newScore) {
        this.gameOverScreen.showNewBestScoreMessage(newScore);
        this.gameOverScreen.open();
    }

    hideGameOverScreen() {
        this.gameOverScreen.hide();
    }

    reset() {
        // Clear main grid
        this.cells.forEach(row => {
            row.forEach(cell => {
                cell.setAttribute('class', '');
            })
        });

        // Set score to 0
        this.scoreElement.innerHTML = 0;
    }

}

export {
    Views
}