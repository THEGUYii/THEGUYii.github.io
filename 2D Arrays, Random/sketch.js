// Grid demo
// Noah Flynn
// 3/26/18

let cols = 10;
let rows = 10;
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
        fill(0);
      }
      else {
        fill(255);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

// function mousePressed() {
//   let xcord = floor(mouseX / cellSize);
//   let ycord = floor(mouseY / cellSize);
//
//   if (grid[xcord][ycord] === 1) {
//     grid[xcord][ycord] === 0;
//   }
//   else {
//     grid
//   }
// }

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