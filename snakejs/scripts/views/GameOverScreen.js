class GameOverScreen {

    constructor() {
        this.containerElement = document.getElementById('ctn_game-over-screen');
        this.newBestScoreMsgElement = document.getElementById('msg_new-best-score');
        this.newBestScoreValueElement = document.getElementById('new-best-score-value');

        this.containerElement.style.display = 'none';
        this.momentOpen = null;

        this._registerHandlers();
    }
    
    _registerHandlers() {

        /*
        Force staying open for a few moments before allowing to close with a "click".
        Important because when playing with control pad it is easy to die just
          before clicking on button to change direction, which could cause the
          game over screen to be closed almost immediately, before player could
          even see it.
        */
        const hideWithDelay = () => {if (Date.now() - this.momentOpen >= 1000) this.hide()};

        this.containerElement.onclick = hideWithDelay;
    }

    open() {
        this.containerElement.style.display = 'block';
        this.momentOpen = Date.now();  // to allow delay on hiding, see handler comment
    }

    hide() {
        this.newBestScoreMsgElement.style.display = 'none'; 
        this.containerElement.style.display = 'none';
    }

    showNewBestScoreMessage(score) {
        this.newBestScoreMsgElement.style.display = 'block';
        this.newBestScoreValueElement.innerHTML = score;
    }

}

export {
    GameOverScreen
}