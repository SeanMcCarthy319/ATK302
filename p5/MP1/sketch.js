function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 800);//the size of the background (h,w,z)

}

function draw() {
  // put drawing code here

  background('#2eafee');
  noStroke();

//function setup()  {
  //createCanvas(720, 800);
  //r = random(255);
  //g = random(255);
  //b = random(255);
//}

function draw()   {
    background('#2eafee');
    if (mouseIsPressed == true) {
      fill(0); // White
    }
    else {
      fill('#2eafee');   // Black
    }
}

//  fill('#fce300');
  //triangle(118, 118, 18, 360, 81, 360);



  //fill('#15781c');
  //ellipse(75, 375, 200, 200);

  //fill('#2a8b31');
  //ellipse(350, 300, 200, 200);

  //fill('#15781c');
  //ellipse(200, 375, 200, 200);

  //fill('##b2acab');
  //ellipse(500, 200, 200, 100);

  //fill('#dfd8d6');
  //ellipse(137, 00, 200, 200);

  //fill('#b2acab');
  //ellipse(400, 175, 200, 100);

  //fill('#b2acab');
  //ellipse(600, 175, 200, 100);

  //fill(255, 83, 13);
  //ellipse(600, 175, 200, 100);



  //fill('#2a8b31');
  //rect(00, 300, 600,500, 0, 100);

  //fill('#8b562a');
  //quad(189, 18, 216, 18, 216, 360, 144, 360);

  //fill('#fce300');
  //ellipse(500, 144, 100, 100);

  fill('#950028');
  if (mousePressed) {
  fill(random (0,255),random (0,255),random (0,255))
  }
  else {
  fill('#950028');
  }
  triangle(500, 380, 625, 700, 375, 700);

  let value = 0;
  function draw() {
    fill('#950028');
    //triangle(500, 380, 625, 700, 375, 700);
  }
  function mousePressed() {
    if (value === 0) {
      value = 255;
    } else {
      value = 0;
    }
  }

  fill('#e6c18c');
  ellipse(500, 400, 100, 110);

  fill('#950028');
  if (mousePressed) {
  fill(random (0,255),random (0,255),random (0,255))
  }
  else {
  fill('#950028');
  }
  rect(450, 375, 100, 25, 0, 0);

  fill('#ebe6e0');
  ellipse(520, 385, 10, 10);

  fill('#ebe6e0');
  ellipse(480, 385, 10, 10);

  fill('#ff3333');
  if (mousePressed) {
  fill(random (0,255),random (0,255),random (0,255))
  }
  else {
  fill('#950028');
  }
  ellipse(500, 545, 120, 210);

  fill('#171717');
  rect(535, 465, 10, 125, 0, 0);

  fill('#171717');
  rect(450, 350, 10, 125, 0, 0);

  fill('#171717');
  rect(460, 625, 10, 160, 0, 0);

  fill('#171717');
  rect(525, 625, 10, 125, 0, 0);


  fill(255);
  //arc(479, 300, 280, 280, PI, TWO_PI);
  //fill(255)
  text(mouseX + ',' + mouseY, 30, 30) ;
}


function mouseReleased() {
  console.log(mouseX + ',' + mouseY)  ;
}

function mousePressed() {
  console.log(mouseX + ',' + mouseY)  ;
}
