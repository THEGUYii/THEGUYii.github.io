// all the commented off stuff is one way. the acctual code it the second way.

// let xBallCoords = [50];
// let yBallCoords = [200];
let ballCoords = [
  [50, 200]
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  for (let i = 0; i < ballCoords.length; i++) {
    // ellipse(xBallCoords[i], yBallCoords[i], 50, 50);
    ellipse(ballCoords[i][0], ballCoords[i][1], 50, 50);
  }
}

function mousePressed() {
  fill(random(255), random(255), random(255));
  noStroke();
  ballCoords.push([mouseX, mouseY]);
  // xBallCoords.push(mouseX);
  // xBallCoords.push(mouseY);
}