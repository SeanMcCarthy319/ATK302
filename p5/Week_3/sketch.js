function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 800);//the size of the background (h,w,z)
  background('#2eafee');
  noStroke();

  //fill('#fce300');
  //triangle(18, 18, 18, 360, 81, 360);

  //fill(102);
  //rect(81, 81, 63, 63);

  //fill(204);
  //quad(189, 18, 216, 18, 216, 360, 144, 360);

fill(255);
ellipse(252, 144, 72, 72);

  //fill(204);
  //triangle(288, 18, 351, 360, 288, 360);

  //fill(255);
  //arc(479, 300, 280, 280, PI, TWO_PI);
}

function draw() {
  // put drawing code here
  if (mouseIsPressed) { background('#2eafee');
  rect(mouseX, mouseY, 10, 10) ;

  }
}
function mouseReleased(random(255), random(255), random(255)) {

}
