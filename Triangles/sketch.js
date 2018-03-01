// Template (Project title)
// Noah Flynn
// 2/27/2018


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

}

function draw() {


  if (mouseIsPressed && keyIsPressed && (key === "t" || key === "T")) {
    let x = random(width);
    let y = random(height);
    triangle(x, y, x - 50, y + 150, x + 50, y + 150);
  }

  if (keyIsPressed && (key === "z" || key === "x")) {
    let x = random(width);
    let y = random(height);
    ellipse(x, y, 50, 50);
  }
  // translate(100, 200);
  // triangle(100, 50, 50, 200, 150, 200);
}