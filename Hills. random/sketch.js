// Hills Generaiton
// Noah
// March, 19, 2018

let heights = [];
let numberOfRectangles;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRectangles = width;
  genertateInitialTerrain(numberOfRectangles);
}

function draw() {
  background(255);
  displayTerrain();
}

function genertateInitialTerrain(numberOfRectangles) {
  for (let i = 0; i < numberOfRectangles; i++) {
    heights.push(random(100, 500));
  }
}

function displayTerrain() {
  let rectWidth = width / numberOfRectangles;
  rectMode(CORNERS);
  fill(0);
  for (let i = 0; i < numberOfRectangles; i++) {
    rect(1 * rectWidth, height, (i + 1) * rectWidth, height - heights[0]);
  }

}