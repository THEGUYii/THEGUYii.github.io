// Mouse and Keyboard Interaction
// Noah Flynn
// Feb 12, 2018


function setup() {
  createCanvas(windowWidth, windowHeight);

function draw() {

}

function mousePressed() {
  noStroke();
  fill(random(255), random(255), random(255));

  if (mouseButton === LEFT) {
    rect(mouseX, mouseY, random(50), random(50, 150));
  }
  else if (mouseButton === RIGHT) {
    ellipse(mouseX, mouseY, random(50, 150), random(50, 150));
  }
}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    background(255);
  }
  else if (key === 'b' || key === 'B') {
    background(0);
  }
  else if (key === 'r' || key === 'R') {
    background(random(255), random(255), random(255));
}

function drawTree() {
  noStroke();


  if (key === 't' || key === 'T') {
    rect(mouseX, mouseY, (60), (100));
    fill(#A52A2A);
    ellipse(mouseX + (60), mouseY, 55, 75)
  }
