// OOP Demo (TIMER)
// Noah Flynn
// 4/17/18

let myTimer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myTimer = new Timer(1000);
}

function draw() {
  if (myTimer.isDone()) {
    ellipse(random(width), random(height), random(25, 200), random(25, 255));
    myTimer.repeat(1000);
  }
}

class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishTime = this.startTime = this.waitTime;
    this.timerIsDone = false;
  }
  repeat(newWaitTime) {
    this.waitTime = newWaitTime;
    this.startTime = millis();
    this.finishTime = this.startTime = this.waitTime;
    this.timerIsDone = false;
  }
  isDone() {
    if (millis() >= this.finishTime) {
      return true;
    }
    else() {
      return false;
    }
  }
}