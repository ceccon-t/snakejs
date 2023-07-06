class Position {

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

    move(displacement) {
        return new Position(this._row + displacement.row(), this._col + displacement.column());
    }

}

export {
    Position
}