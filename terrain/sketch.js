// Terrain Generation
<<<<<<< HEAD
// Dan Schellenberg - replace with your name
// Mar 19, 2018

let heights = [];
let numberOfRectangles;
let rectWidth = width / numberOfRectangles;
let flag;

function preload() {
  flag = loadImage("images/CanadianFlag.png");
=======
// Naoh Flynn
// Mar 23, 2018

let heights = [];
let numberOfRectangles;
let flag;

function preload() {
  flag = loadImage("images/canada-flag-icon-32.png");
>>>>>>> 2bd471dc1c913244de9f776d3fe4c7873c637fc7
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRectangles = width;
  generateInitialTerrain(numberOfRectangles);
}

function draw() {
  background(255);
  displayTerrain();
<<<<<<< HEAD
  placeFlag();
}

function generateInitialTerrain(numberOfRectangles) {
  let time = 0;
  let dt = 0.001;

  for (let i = 0; i < numberOfRectangles; i++) {
    let currentHeight = noise(time) * 700;
    time += dt;
    heights.push(currentHeight);
  }
}

function placeFlag() {
  let tallest = 0;
  let highestX = 0;
  let rectWidth = width / numberOfRectangles;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > tallest) {
      tallest = heights[i];
      highestX = i * rectWidth;
    }
  }

  let highestY = height - tallest;

  // Flag
  fill(255, 0, 0);
  ellipse(highestX, highestY, 20, 20);
  image(flag, highestX, highestY);
=======
  plantFlag();
}

function plantFlag() {
  let highestX;
  let rectWidth = width / numberOfRectangles;
  let tallest = 0;
  for (let i=0; i<heights.length; i++) {
    if (heights[i] > tallest) {
      tallest = heights[i];
      highestX = i*rectWidth;
    }
  }

  // height line
  let highestY = height - tallest;
  // stroke(255, 0, 0);
  // line(0, highestY, width, highestY);

  // flag
  // fill(255, 0, 0);
  // ellipse(highestX, highestY, 50, 50);
  image(flag, highestX, highestY-flag.height);
}

function generateInitialTerrain(numberOfRectangles) {
  let time = 0;
  let dt = 0.002;

  for (let i=0; i<numberOfRectangles; i++) {
    let currentHeight = noise(time)*500;
    heights.push(currentHeight);
    time += dt;
  }
>>>>>>> 2bd471dc1c913244de9f776d3fe4c7873c637fc7
}

function displayTerrain() {
  let rectWidth = width / numberOfRectangles;
  rectMode(CORNERS);
<<<<<<< HEAD
  fill(255);
  stroke(0);
  for (let i = 0; i < numberOfRectangles; i++) {
    rect(i * rectWidth, height, (i + 1) * rectWidth, height - heights[i]);
  }
}
=======
  fill(0);
  stroke(0);
  for (let i=0; i<numberOfRectangles; i++) {
    rect(i*rectWidth, height, (i+1)*rectWidth, height - heights[i]);
  }
}
>>>>>>> 2bd471dc1c913244de9f776d3fe4c7873c637fc7
