import { Directions } from "../coordinates/Direction.js";

class Controls {
    
    constructor(game, configuration) {
        this.game = game;
        this.config = configuration;

        addEventListener('keydown', (e) => this._handleKeyPressed(e));
    }

    _handleKeyPressed(e) {
        switch(e.code) {
            case 'ArrowUp':
                e.preventDefault(); // otherwise might scroll page depending on screen res
            case 'KeyW':
                this.game.attemptChangingDirection(Directions.up());
                break;

            case 'ArrowDown':
                e.preventDefault();
            case 'KeyS':
                this.game.attemptChangingDirection(Directions.down());
                break;

            case 'ArrowLeft':
                e.preventDefault();
            case 'KeyA':
                this.game.attemptChangingDirection(Directions.left());
                break;

            case 'ArrowRight':
                e.preventDefault();
            case 'KeyD':
                this.game.attemptChangingDirection(Directions.right());
                break;
        }
    }
}

export {
    Controls
}
