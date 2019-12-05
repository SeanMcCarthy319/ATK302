var myState = 0;
var timer = 200;
var x = 0;
var velocity  = 5 ;


function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  background(100);
  fill('#F7FF3C');
  rect(width / 2, height / 2, 150, 400);

  switch (myState) {
    case 0: // green state
      fill('grey');
      ellipse(width / 2, height / 2 - 125, 100, 100); // top circle
      ellipse(width / 2, height / 2, 100, 100); // middle

      fill('green');
      ellipse(width / 2, height / 2 + 125, 100, 100); // bottom

      dotimer(1, 50) ;
      velocity  = 5 ;
      break;

    case 1: // yellow state      fill('grey');

      fill('grey');
      ellipse(width / 2, height / 2 - 125, 100, 100); // top circle
      ellipse(width / 2, height / 2 + 125, 100, 100); // bottom

      fill('yellow');
      ellipse(width / 2, height / 2, 100, 100); // middle

      dotimer(2, 100) ;
      velocity  = 2 ;
      break;

    case 2: // red state
      fill('red');
      ellipse(width / 2, height / 2 - 125, 100, 100); // top circle

      fill('grey');
      ellipse(width / 2, height / 2, 100, 100); // middle
      ellipse(width / 2, height / 2 + 125, 100, 100); // bottom

      dotimer(0, 200) ;
      velocity  = 0 ;
      break;
  }

  fill('purple');
  rect(x, height - 100, 80, 50)
  x = x + velocity ;
  if (x > width) {
    x = 0;
  }


}


function dotimer(variableState, variableTimer) {
  timer-- ;
  if (timer <= 0) {
    timer = 200 ;
    myState = variableState;
  }
}
