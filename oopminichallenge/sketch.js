// oop mini challenge
// Noah Flynn
// 4/19/18-

let cain;
let weld;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cain = new walker(width / 2, height / 2);
  weld = new walker(100, 200, 0, 0, 255)
}

function draw() {
  cain.move();
  weld.move();

  cain.display();
  weld.display();
}


class walker {
  constructor(x, y, r = 255, g = 0, b = 0) {
    this.x = x;
    this.y = y;
    this.radius = 1;
    this.color = color(r, g, b);
  }

  move() {
    let choice = random(100); {
      if (choice < 25) {
        this.x -= 2;
      }
      else if (choice < 50) {
        this.x += 2;
      }
      else if (choice < 75) {
        this.y -= 2;
      }
      else {
        this.y += 2;
      }
    }
  }

  display() {
    stroke(this.color);
    fill(this.color);
    ellipse(this.x, this.y, this.radius, this.radius);
  }

}