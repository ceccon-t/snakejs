import { Configuration } from "./configuration/Configuration.js";
import { Views } from "./views/Views.js";
import { ENTITY_TYPES } from "./entityTypes/EntityTypes.js";

const TOTAL_ROWS = 20;
const TOTAL_COLUMNS = 20;

const configuration = new Configuration(
    TOTAL_ROWS,
    TOTAL_COLUMNS
);

const views = new Views(configuration);
views.initializeGrid();

// Initialize player
views.displayCellAs(9, 5, ENTITY_TYPES.SNAKE);
views.displayCellAs(9, 4, ENTITY_TYPES.SNAKE);
views.displayCellAs(9, 3, ENTITY_TYPES.SNAKE);

