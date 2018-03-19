// Object Intro
// Noah Flynn
// March 4th, 2018


let ball = {
  x: 200,
  y: 300,
  radius: 50,
};

let currentColor = 0;

let scrollColours = [
  [1, 2, 3, 4, 5, 6]
];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noCursor();
}

function draw() {
  noStroke();
  ball.x = mouseX;
  ball.y = mouseY;
  ellipse(ball.x, ball.y, ball.radius, ball.radius);
  mousePressed() === 0, fill(0);
  mousePressed() === 1, fill(11, 201, 249);

  // fill(random(255), random(255), random(255));
}

function mousePressed() {
  currentColor += 1;
}