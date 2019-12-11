var cars = [];
var frogPos;
var myState = 0;
var myTimer = 0;



function setup() {
  // put setup code here
  createCanvas(800, 800);
  for (var i = 0; i < 20; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height / 80);
}


function draw() {
  // put drawing code here

  switch (myState) {

    case 0: // splash screen
      background(100);
      fill('gray');
      text("Welcome to the DeathStar, \n Don't let the Rebels escape with the data, \n Click to Start!", 150, 250);
      textAlign('CENTER');
      textSize(50);
      break;

    case 1: // the game state
      game();

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
      text("Success! The Rebels are Doomed!", 150, 250);
      textSize(50);
      break;

    case 3: // the lose state
      background(100);
      fill('red');
      text("You disgraced the Empire!", 150, 250);
      textSize(50);
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
  fill('black');
  //this.vel = random(5, 10);

  //methods
  this.display = function() {
    fill('white');
    ellipse(this.pos.x, this.pos.y, 100, 50);
    fill('black');
    ellipse(this.pos.x + 10, this.pos.y + 0, 50, 50);

  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

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
    if (cars[i].pos.dist(frogPos) < 60) {
      cars.splice(i, 1);
    }
  }
  if (cars.length == 0) {
    myState = 2;
  }

  fill('red');
  ellipse(frogPos.x, frogPos.y, 60, 60);
  checkForKeys();
}
