// Translations Demo
// Noah Flynn
// Mar, 13, 2018

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  push();
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  noStroke();
  rotate(frameCount);
  rectMode(CENTER);
  rect(0, 0, 500, 50);
  pop();

  rect(100, 100, 200, 200);

}