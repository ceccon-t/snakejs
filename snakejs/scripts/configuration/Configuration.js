const MILLISECONDS_PER_TURN_MOBILE = 300;  
const MILLISECONDS_PER_TURN_DESKTOP = 150;

const onMobile = () => {
    const mobileAgentMatches = [
        'Android',
        'webOS',
        'iPhone',
        'iPad'
    ];

    const matchedMobile = mobileAgentMatches.some(item => {
        return navigator.userAgent.includes(item);
    });

    return matchedMobile;
}

class Configuration {
    
    constructor(rows, columns, pointsPerFood) {
        this.rows = rows;
        this.columns = columns;
        this._scoreIncrement = pointsPerFood;

        this.onMobile = onMobile();

        // Control pad event response is slow depending on mobile hardware
        // so it is better to make the game slower in this case
        this._timeIncrement = this.onMobile? MILLISECONDS_PER_TURN_MOBILE : MILLISECONDS_PER_TURN_DESKTOP;

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

    scoreIncrement() {
        return this._scoreIncrement;
    }

    isOnMobile() {
        return this.onMobile;
    }

}

export {
    Configuration
}