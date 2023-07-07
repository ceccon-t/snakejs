import { Directions } from "../coordinates/Direction.js";

class Controls {
    
    constructor(game, configuration) {
        this.game = game;
        this.config = configuration;

        this._registerHandlers();

    }

    _registerHandlers() {
        document.getElementById('btn_pause').onclick = () => this.game.togglePause();
        document.getElementById('btn_restart').onclick = () => this.game.restart();

        addEventListener('keydown', (e) => this._handleKeyPressed(e));

        if (this.config.isOnMobile()) this._registerControlPadEvents();
    }

    _handleKeyPressed(e) {
        switch(e.code) {

            // Movements
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


            // Game controls
            case 'Escape':
                e.preventDefault();
                this.game.restart();
                break;

            case 'Space':
                e.preventDefault();
                this.game.togglePause();
                break;
        }
    }

    _registerControlPadEvents() {
        document.getElementById('btn_pad_up').onclick = () => this.game.attemptChangingDirection(Directions.up());
        document.getElementById('btn_pad_down').onclick = () => this.game.attemptChangingDirection(Directions.down());
        document.getElementById('btn_pad_left').onclick = () => this.game.attemptChangingDirection(Directions.left());
        document.getElementById('btn_pad_right').onclick = () => this.game.attemptChangingDirection(Directions.right());
    }

}

export {
    Controls
}
