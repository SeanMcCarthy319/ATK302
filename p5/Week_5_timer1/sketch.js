var myState=0 ;
var myTimer = 200 ;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  myBcolor  = color(random(255), random(255), random(255));
}

function draw() {
console.log();
  switch (myState) {
    case 0:
      background(myBcolor);
      text("case 0", width / 2, 100);
      myTimer++ ;
      if (myTimer >=  200) {
        myState = 1 ;
        myTimer = 0 ;
        myBcolor  = color(random(255), random(255), random(255));
      }
      break;

    case 1:
      background(myBcolor);
      text("case 1", 100, 100);
      myTimer++ ;
      if (myTimer >=  200) {
        myState = 2 ;
        myTimer = 0 ;
        myBcolor  = color(random(255), random(255), random(255));
      }
      break;

    case 2:
      background(myBcolor);
      text("case 2", 100, 100);
      myTimer++ ;
      if (myTimer >=  200) {
        myState = 2 ;
        myTimer = 0 ;
        myBcolor  = color(random(255), random(255), random(255));
      }
      break;
  }
}

//function mouseReleased() {
  // add one to myState
  // if myState got past 2, reset it to 0
  //myState++;

  //if (myState > 2) {
    //myState = 0;
  //}
//
