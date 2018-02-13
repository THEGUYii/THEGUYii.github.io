// Local vs Global example
//Noah Flynn
// Feb 13, 2018

let a = 80;
let b = 65;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  noLoop();
}

function draw() {
  line(a, 0, a, height);

  for (let a = 2; a < 200; a += 2) {
    line(a, 0, a, height);
  }

  drawAnotherLine();

  drawYetAnotherLine();

  function drawAnotherLine() {
    let a = 120;
    line(a, 0, a, height);
  }

  function drawYetAnotherLine() {
    line(a + 5, 0, a + 5, height);
  }

}