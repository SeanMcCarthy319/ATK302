var myState = 0;
var timer = 200;
var song1, song2, song3;
var x = 0;
var y = 0;


function preload() {
  song1 = loadSound('Assets/beats.mp3');
  song2 = loadSound('Assets/full2.mp3');
  song3 = loadSound('Assets/mix1.mp3');

  function setup() {
    // put setup code here
    createCanvas(800, 800);
    myBcolor = color(random(255), random(255), random(255));
  }
  function draw() {
    console.log();
    switch (myState) {
      case 0:
        background(myBcolor);
        loadSound('Assets/mix1.mp3');
        text("IT’S ROAD TRIP TIME!!!!", width / 2, 100);
        timer-- ;
        if (timer >= 200) {
          myState = 1;
          timer = 0;
          myBcolor = color(random(255), random(255), random(255));
        }
        // put drawing code here
        //background(100);
        rect(x, height / 2, 10, 10);
        rect(width / 2, y, 10, 10);


        x += 5;
        y += 3;
        if (x > width) {
          x = 0;
        }
        if (y > height) {
          y = 0;
        }
        break;

      case 1:
        background(myBcolor);
        loadSound('Assets/full2.mp3');
        text("case 1", 100, 100);
        timer--;
        if (timer >= 300) {
          myState = 2;
          myTimer = 0;
          myBcolor = color(random(255), random(255), random(255));
        }
        // put drawing code here
        //background(100);
        rect(x, height / 2, 10, 10);
        rect(width / 2, y, 10, 10);


        x += 5;
        y += 3;
        if (x > width) {
          x = 0;
        }
        if (y > height) {
          y = 0;
          break;

          case 2:
            background(myBcolor);
          loadSound('Assets/beats.mp3');
          text("case 2", 100, 100);
          myTimer++;
          if (myTimer >= 300) {
            myState = 2;
            myTimer = 0;
            myBcolor = color(random(255), random(255), random(255));
          }
          // put drawing code here
          //background(100);
          rect(x, height / 2, 10, 10);
          rect(width / 2, y, 10, 10);


          x += 5;
          y += 3;
          if (x > width) {
            x = 0;
          }
          if (y > height) {
            y = 0;
            break;
          }
        }

        //function mouseReleased() {
        //add one to myState
        //if myState got past 2, reset it to 0
        //  myState++;

        //if (myState > 2) {
        //  myState = 0;
        //  }
