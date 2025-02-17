// generativeArt.js
function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(20, 100);
    fill(random(255), random(255), random(255));
    ellipse(x, y, size, size);
  }
}
