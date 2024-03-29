var cars = [];
var frogPos;
var myState = 0;
var myTimer = 0;
var yoda, yodaLeft, yodaRight;
//var bird;
var bird = [];
var timer;


function setup() {
  // put setup code here
  createCanvas(800, 800);
  for (var i = 0; i < 30; i++) {
    cars.push(new Car());
  }

  yodaLeft = loadImage("Assets/assets/yodaLeft.gif") ;
  yodaRight = loadImage("Assets/assets/yodaRight.gif") ;
  yoda = yodaLeft ;

  //bird = loadImage("Assets/birds/bird1.png") ;
  bird[0] = loadImage("Assets/birds/bird1.png") ;
  bird[1] = loadImage("Assets/birds/bird2.png") ;
  bird[2] = loadImage("Assets/birds/bird3.png") ;

  frogPos = createVector(width / 2, height / 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}


function draw() {
  // put drawing code here

  switch (myState) {

    case 0: // splash screen
      background(100);
      fill('gray');
      text("Welcome to my game, Click to Start!", 150, 250);
      textSize(25);
      break;

    case 1: // the game state
      //game();

      fill('black');
      myTimer++;
      if (myTimer > 800) {
        myState = 3;
        myTimer = 0;
      }
      break;

    case 2: // the win state
      background(100);
      fill('blue');
      text("You Won!", 150, 250);
      textSize(150);
      break;

    case 3: // the lose state
      background(100);
      fill('red');
      text("You Lost!", 150, 250);
      textSize(150);
      break;

  }
}

function mouseReleased() {
  switch (myState) {
    case 0: // splash screen
      myState = 1;
      break;

    case 2: // the game state
      myState = 0;
      restTheGame();
      break;

    case 3: // the win state
      myState = 0;
      restTheGame();
      break;

  }
}



function Car() {
  //attributes
  //this.x = random(width);
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  //this.y = random(height);
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = 0;
  this.timer = 0;

  //this.vel = random(5, 10);

  //methods
  this.display = function() {
    //fill(this.r, this.g, this.b);
    //rect(this.pos.x, this.pos.y, 100, 50);
    //fill('black');
    //ellipse(this.pos.x + 20, this.pos.y + 50, 25, 25);
    //ellipse(this.pos.x + 80, this.pos.y + 50, 25, 25);


    image(bird[this.birdNum], this.pos.x, this.pos.y, 100, 100);

    this.timer++;
    if (this.timer > 20) {
      this.birdNum = this.birdNum + 1;
      this.timer = 0;
    }

    if (this.birdNum > birds.length - 1) {
      this.birdNum = 0;
    }

  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}

function keyPress() {
  if (keyCode === LEFT_ARROW) yoda = yodaLeft ;
  if (keyCode === RIGHT_ARROW) yoda = yodaRight ;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
}

function restTheGame() {
  cars = [] ;
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
}


function game() {
  background(100);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }
  if (cars.length == 0) {
    myState = 2;
  }

  fill('light green');
  //ellipse(frogPos.x, frogPos.y, 60, 60);
  //checkForKeys();
}
