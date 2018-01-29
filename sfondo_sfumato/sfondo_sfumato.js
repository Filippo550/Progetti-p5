var linea = {
  sX : 0,
  sY : 0,
  eX : 0,
  col : 0,
};

function setup() {
  createCanvas(600, 400);
  background(255);
}

function draw() {
    noFill();
    stroke(0);
    rect(0, 0, width-1, height-1);

    sfuma();
}

function sfuma() {
  while(linea.sX <= width) {
    linea.col = map(linea.sX,0,width,255, 0);
    stroke(linea.col);
    line(linea.sX, linea.sY, linea.eX, height);

    linea.sX++;
    linea.eX++;
    linea.col++;
  }
}
