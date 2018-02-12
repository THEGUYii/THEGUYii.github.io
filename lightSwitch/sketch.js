let lightSwitch;

function setup() {
  createCanvas(windowWidth, windowHeight);
  lightSwitch = true;
}

function draw() {
  if (lightSwitch === true
}

function keyTyped() {
  if (key === ' ') {
    lightSwitch = !lightSwitch
  }
}

function drawLight() {
  if (lightSwitch === true) {
    fill(255);
  }
  else {
    fill(0);
  }
}
