let mode;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
  mode = 1;
}



function draw() {
  line(width / 2, 0, width / 2, height);
  if (mouseX < windowWidth / 2) {
    fill(random(255), random(255);
    if (mode === 1) {
      rect(random(width), random(height), random(50, 150));
    }
  }

  else {
    fill(random(255), random(255), random(255), random(255));
    if (mode === 1) {
      ellipse(random(width), random(height), random(50, 150));
    }
  }
}

function keyTyped() {
  if (key === '1') {
    mode = 1;
  }
  else if (key == '2') {
    mode = 2;
  }
}
