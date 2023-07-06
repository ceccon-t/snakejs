class Snake {

    constructor(initialPositions) {
        this.body = [];

        for (let i = 0; i < initialPositions.length; i++) {
            this.body.unshift(initialPositions[i]);
        }

    }

    getHead() {
        return this.body[0];
    }

    moveHead(newHeadPosition) {
        this.body.unshift(newHeadPosition);
    }

    moveTail() {
        return this.body.pop();
    }

}

export {
    Snake
}