// mouse and keyboard interaction
// Noah Flynn
// Feb 14, 2018
let reset;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(192, 192, 192);
  reset = true;
}

function draw() {
  fill(random(255), random(255), random(255));
  ellipse(random(windowWidth), random(windowHeight), 50, 50);
}

function keyTyped() {
  if (key === " ") {
    reset = !reset;
    return false;
  }
}


function mouseClicked() {
  if (reset === true) {
    background(192, 192, 192);
  }
}