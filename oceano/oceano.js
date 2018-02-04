var rock1, rock2;
var bubble1, bubble2;
var alga1, alga2, alga3, alga4;
var pesce1, pesce2;

function setup() {
  createCanvas(600, 400);
  rock1 = new Roccia(400);
  rock2 = new Roccia(150);

  bubble1 = new Bolla(rock1.x, 7, 20);
  bubble2 = new Bolla(rock2.x, 5, 15);

  alga1 = new Alga(200, 10);
  alga2 = new Alga(470, 7);
  alga3 = new Alga(300, 15);
  alga4 = new Alga(320, 6);

  pesce1 = new Pesce(-200, random(20, height-20), 2, 200);
  pesce2 = new Pesce(-100, random(20, height-20), 2.5, 300);
}

function draw() {
  background(9, 74, 216);
  noStroke();
  fill(238, 232, 170);
  rect(0, 400, width, -10);

  bolle();
  rocce();
  alghe();
  pesci();
}

function bolle() {
  bubble1.genera();
  bubble1.muovi();
  bubble1.tornaIndietro();
  bubble2.genera();
  bubble2.muovi();
  bubble2.tornaIndietro();
}

function rocce() {
  rock1.mostra();
  rock2.mostra();
}

function alghe() {
  alga1.mostra();
  alga2.mostra();
  alga3.mostra();
  alga4.mostra();
}

function pesci() {
  pesce1.genera();
  pesce1.nuota();
  pesce2.genera();
  pesce2.nuota();
}

class Roccia {
  constructor(x, scl) {
    this.y = height;
    this.x = x;
  }

  mostra() {
    stroke(139, 69, 19);
    fill(160, 82, 45);
    ellipse(this.x, this.y, 25);
    ellipse(this.x, 380, 25);
    ellipse(this.x-12, 350, 30);
    fill(0);
    ellipse(this.x-12, 350, 15);
    stroke(139, 69, 19);
    fill(160, 82, 45);
    rect(this.x, 400, -30, -50);
    rect(this.x-25, 400, -20, -20);
    rect(this.x+28, 400, -20, -20);
  }
}

class Bolla {
  constructor(x, spd, scl) {
    this.x = x;
    this.y = 300;
    this.spd = -spd;
    this.scl = scl;
  }

  genera() {
    stroke(255);
    noFill();
    ellipse(this.x-12, this.y, this.scl);
  }

  muovi() {
    this.y += this.spd;
    }

  tornaIndietro() {
      if(0 > this.y) {
          this.y = 300;
      }
  }
}

class Alga {
  constructor(x, scl) {
    this.x = x;
    this.scl = scl;
    this.upX = this.x+random(-2, 2);
  }
  mostra() {
    fill(46, 139, 87);
    stroke(34, 139, 34);
    rect(this.x, height-10, this.scl, -this.scl);
    rect(this.upX, height-10-this.scl, this.scl, -this.scl);
  }
}

class Pesce {
  constructor(x, y, spd, delay) {
    this.x = x;
    this.y = y;
    this.spd = spd;
    this.delay = delay;

  }
  genera() {
      fill(255, 0, 0);
      stroke(255, 10, 10);
      ellipse(this.x, this.y, 20, 10);
      triangle(this.x,this.y,this.x-10,this.y-7,this.x-10,this.y+7);
    }

  nuota() {
    if(this.x > width+40) {
      this.x = -this.delay;
      this.y = random(20, height-20);
    }

    this.y += random(-2, 2);
    this.x += this.spd;
  }
}
