# SnakeJS - Architecture

## Structure

### Project meta files

The main folder of the project is named `snakejs`, and it is present at the root of the repository. Also at the root, `README.md` gives a short presentation at a project level, while this `architecture.md` file should quickly put any developer up to speed as to how the code is laid out. 

### Code overview

The project uses only HTML, CSS and vanilla JavaScript.

All the HTML code is inside `index.html`. Similarly, all of the CSS code is inside `styles/index.css`. These do not need to be broken up in several files because they are relatively short and straightforward.

The bulk of the application consists of JavaScript code. This is split up in several files, according to their semantic role. All of the scripts are inside the `scripts` folder and its subfolders. Usually each class is defined inside a script file with the same name as itself.

The initial setup and wiring of the main objects is done in file `SnajeJS.js`, which is the only one imported in the html. The object that enforces the high level rules is an instance of the `Game` class. Class `Configuration` is used as the source of truth for the most important configurations, while `Views` is responsible for any updates on the DOM and `Controls` centralizes the definition of the handlers for user input.

The logical representation of the grid is as a 2-dimensional array that keeps track of which type of entity (snake, food or empty) is present at each position, and it can be found on the `Grid.js` file. The visual representation is done with a css-grid container (div with id `main_grid` on the html) of 20 rows and 20 columns filled with plain div elements of equal size, initialized through JavaScript on startup (check file `Views.js` for the code that does it). In order to show any cell as being part of the snake or a piece of food, the respective div element receives either `snake` or `food` as a css class - removing these display the cell as being an empty part of the grid.

## Automated Tests

Automated test scripts are present on the same folder of the script they test. They usually also have the same name of this script, but end with the `.test.js` extension.

The framework used is `vitest`, which has an API very similar to `Jest`. The most important functions to know here are `describe` (which defines a test suite), `it` (which defines a test case) and `expect` (which is used to make the assertions).

To execute all tests, run `npm test` on the main folder of the application.

## Continuous Integration

The project uses Github Actions to run all automated tests whenever a new commit enters either the `main` or `dev` branches. The script that defines the workflow can be found under `.github/workflows/main-workflow.yml`.

If any test is broken, the build fails and a red failure sign is displayed near the hash of the commit in the repository. If all tests pass, a green success sign is displayed instead.

## Libraries and Frameworks

[npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) as a dependency management tool.

[http-server](https://www.npmjs.com/package/http-server) as a development server (not needed after deploy).

[vitest](https://vitest.dev/) for automated tests.

[Github Actions](https://docs.github.com/en/actions/learn-github-actions) for continuous integration.

Of these, only npm needs to be manually installed in order to work with the project. The others will be installed automatically when you run `npm install` on the folder that contains the `package.json` file.