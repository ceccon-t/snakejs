class Displacement {

    constructor(row, col) {
        this._row = row;
        this._col = col;
    }

    row() {
        return this._row;
    }

    column() {
        return this._col;
    }

}

export {
    Displacement
}