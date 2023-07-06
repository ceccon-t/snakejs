import { Configuration } from "./configuration/Configuration.js";
import { Views } from "./views/Views.js";
import { Game } from "./game/Game.js";

const TOTAL_ROWS = 20;
const TOTAL_COLUMNS = 20;

const configuration = new Configuration(
    TOTAL_ROWS,
    TOTAL_COLUMNS
);

const views = new Views(configuration);
const game = new Game(configuration, views);

game.start();
