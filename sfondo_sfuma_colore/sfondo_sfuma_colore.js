var col = {
  r : 0,
  g : 0,
  b : 0
};

var w = 600;
var h = 400;

function setup() {
  createCanvas(w, h);
}

function draw() {
  col.r = map(mouseX, 0, w, 255, 0);
  col.g = map(mouseX, 0, w, 255, 255);
  col.b = map(mouseX, 0, w, 255, 0);

  //Sfondo
  background(col.r, col.g, col.b);

  //Bordo
  noFill();
  stroke(0);
  rect(0, 0, w-1, h-1);
}
