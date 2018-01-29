//Punto
var dot = {
  x : 0,
  y : 0,
  dim : 24
};

//Colore
var col = {
  g : 0,
  b : 0,
  alpha : 90
};

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  //Colore random
  col.g = random(0, 255);
  col.b = random(0, 255);

  //Posizione random
  dot.x = random(0, width);
  dot.y = random(0, height);

  //Disegna punti
  noStroke();
  fill(0, col.g, col.b, col.alpha);
  ellipse(dot.x, dot.y, dot.dim, dot.dim);
}
