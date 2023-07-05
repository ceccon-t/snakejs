class Configuration {
    
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
    }

    totalRows() {
        return this.rows;
    }

    totalColumns() {
        return this.columns;
    }

}

export {
    Configuration
}