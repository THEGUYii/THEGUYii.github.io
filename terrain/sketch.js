// Terrain Generation
// Dan Schellenberg - replace with your name
// Mar 19, 2018

let heights = [];
let numberOfRectangles;
let rectWidth = width / numberOfRectangles;
let flag;

function preload() {
  flag = loadImage("images/CanadianFlag.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRectangles = width;
  generateInitialTerrain(numberOfRectangles);
}

function draw() {
  background(255);
  displayTerrain();
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
}

function displayTerrain() {
  let rectWidth = width / numberOfRectangles;
  rectMode(CORNERS);
  fill(255);
  stroke(0);
  for (let i = 0; i < numberOfRectangles; i++) {
    rect(i * rectWidth, height, (i + 1) * rectWidth, height - heights[i]);
  }
}