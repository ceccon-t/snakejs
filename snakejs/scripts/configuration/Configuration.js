const MILLISECONDS_PER_TURN = 300;

class Configuration {
    
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;

        this._timeIncrement = MILLISECONDS_PER_TURN;
    }

    totalRows() {
        return this.rows;
    }

    totalColumns() {
        return this.columns;
    }

    timeIncrement() {
        return this._timeIncrement;
    }

}

export {
    Configuration
}