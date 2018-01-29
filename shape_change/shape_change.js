function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  //Bordo
  noFill();
  stroke(0);
  rect(0, 0, width-1, height-1);

  //Triangolo
  var lato = 80;

  if (mouseX < 200) {
  stroke(0, 100, 255);
  strokeWeight(4);
  triangle(mouseX-lato/2, mouseY+lato/2, mouseX, mouseY-lato/2, mouseX+lato/2, mouseY+lato/2);
  }
  //Cerchio
  else if (mouseX < 400) {
    stroke(255, 0, 100);
    strokeWeight(4);
    ellipse(mouseX, mouseY, 80, 80);
  }
  //Quadrato
  else {
    stroke(0, 255, 0);
    strokeWeight(4);
    rect(mouseX-40, mouseY-40, 80, 80);
  }
}
