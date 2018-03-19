// Object Intro
// Noah Flynn
// March 4th, 2018


let ball = {
  x: 200,
  y: 300,
  radius: 50,
};
let squares = {
  x: 300,
  y: 300,
  rectWidth: 50,
};



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noCursor();
}

function draw() {
  noStroke();
  fill(random(255), random(255), random(255));
  ball.x = mouseX;
  ball.y = mouseY;
  ellipse(ball.x, ball.y, ball.radius, ball.radius);
  squares.x = mouseX;
  squares.y = mouseY - 200;
  rect(squares.x, squares.y, squares.rectWidth, squares.rectWidth);
}