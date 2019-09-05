function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(1200, 800);//the size of the background (h,w,z)
  background('#2eafee');
  noStroke();

  image

  //fill('#fce300');
  //triangle(18, 18, 18, 360, 81, 360);

  //fill(102);
  //rect(81, 81, 63, 63);

  fill(204);
  quad(100, 180, 200, 180, 216, 360, 74, 360);

  fill('#e6c18c');
  ellipse(252, 144, 74, 81);

  //fill(204);
  //triangle(288, 18, 351, 360, 288, 360);

  //fill(255);
  //arc(479, 300, 280, 280, PI, TWO_PI);

  //<img src="Atk 301 Photos/TV.png" alt="TV" />
  //<img src="Atk 301 Photos/Top.png" alt="Top" />

  fill(255)
  text(mouseX + ',' + mouseY, 30, 30) ;

  function mouseReleased() {
    console.log(mouseX + ',' + mouseY)  ;
  }

}
