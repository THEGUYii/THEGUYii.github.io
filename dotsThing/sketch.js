// Dots Thing
// Noah
// Mar 4, 2018


function setup() {
  createCanvas(windowWidth, windowWidth);
  noCursor();
}

function draw() {
  background(0);
  displayDots();
}

function displayDots() {
  let pointSpacing = 100;
  for (let x = pointSpacing; x < width; x += pointSpacing) {
    for (let y = pointSpacing; y < height; y += pointSpacing) {
      ellipse(x, y, 4, 4);
      stroke(255, 60);
      line(x, y, mouseX, mouseY);
    }
  }
}









// function drawOutline() {
//   fill(0);
//   rect(0, 0, width, borderSize);
//   rect(0, 0, borderSize, height);
//   rect(width - borderSize, 0, width, height);
//   rect(0, height - borderSize, width, height);
// }