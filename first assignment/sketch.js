// mouse and keyboard interaction
// Noah Flynn
// Feb 9, 2018


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(192, 192, 192);
}

function draw() {}

function randomBalls() {
  ellipse(random(windowWidth), random(windowHeight), 50, 255);
}