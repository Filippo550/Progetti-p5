var quadrati = {
  x: 0,
  y: 0,
  l: 0
};

var col = {
  r: 0,
  g: 0,
  b: 0
}

function setup() {
  createCanvas(600, 400);
    background(50);
}

function draw() {
  quadratiRandom();
}

function quadrato(x, y, l) {
  noFill();
  stroke(255);
  rect(x, y, l, l);
}

function quadratiRandom() {
  quadrati.x = random(0, width);
  quadrati.y = random(0, height);
  quadrati.l = random(10, 50);

  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);

  noFill();
  stroke(col.r, col.g, col.b);
  rect(quadrati.x, quadrati.y, quadrati.l, quadrati.l);
}

function mousePressed() {
  background(50);
}
