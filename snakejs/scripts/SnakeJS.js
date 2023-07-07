import { Configuration } from "./configuration/Configuration.js";
import { Views } from "./views/Views.js";
import { Game } from "./game/Game.js";
import { Controls } from "./controls/Controls.js";

const TOTAL_ROWS = 20;
const TOTAL_COLUMNS = 20;
const POINT_PER_FOOD = 15;

const configuration = new Configuration(
    TOTAL_ROWS,
    TOTAL_COLUMNS,
    POINT_PER_FOOD
);

const views = new Views(configuration);
const game = new Game(configuration, views);
const controls = new Controls(game, configuration);

game.start();
