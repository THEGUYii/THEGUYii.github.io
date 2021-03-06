// Sudoku
// Noah Flynn
// March 29 2018


let cols = 9;
let rows = 9;
let grid;
let cellSize;

function setup() {
  createCanvas(600, 600);
  cellSize = width / cols;
  grid = createRandom2DArray(cols, rows);
}

function draw() {
  background(255);
  displayGrid();

}

function displayGrid() {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (grid[x][y] === 0) {
        fill(255);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function keyPressed() {
  grid = createRandom2DArray(cols, rows);
}

function createRandom2DArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(100) < 50) {
        randomGrid[x].push(0);
      }
      else {
        randomGrid[x].push(1);
      }
    }
  }
  return randomGrid;
}