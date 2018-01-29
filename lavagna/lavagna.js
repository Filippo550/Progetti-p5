//RISOLVERE QUALCHE BUGS
var spessore = 30;
var col = 50;

function setup() {
  createCanvas(600+spessore,400+spessore);
  background(50);
}

function draw() {
  gesso(20);
  bordo(); //Sotto a tutti
}

function gesso(g) {
  noStroke();
  fill(col);
  ellipse(mouseX, mouseY, g, g);
}

function bordo() {
  //"Legno"
  noStroke();
  fill(139,69,19);
  rect(0, 0, width, spessore);
  rect(0, 0, spessore, height);
  rect(0, height, width, -spessore);
  rect(width-spessore, spessore, spessore, height);
  //CancellaTutto
  stroke(0);
  fill(50);
  rect(width-spessore, 150, spessore, spessore);
}

function mousePressed() {
  if(col == 255) {
    col = 50;
  } else if (col == 50) {
      col = 255;
  }

  if (mouseX > width-spessore && mouseX < width && mouseY > 150 && mouseY < 150+spessore) {
    background(50);
    col = 50;
  }
}
