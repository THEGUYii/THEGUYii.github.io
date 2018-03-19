// Object Intro
// Noah Flynn
// March 4th, 2018


let ball = {
  x: 200,
  y: 300,
  radius: 50,
};




function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noCursor();
}

function draw() {
  fill(random(255), random(255), random(255));
  ball.x = mouseX;
  ball.y = mouseY;
  ellipse(ball.x, ball.y, ball.radius, ball.radius);
}