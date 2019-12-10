var song1, song2, song3;
var myState = 0;


function preload() {
  song1 = loadSound('Assets/beats.mp3');
  song2 = loadSound('Assets/full2.mp3');
  song3 = loadSound('Assets/mix1.mp3');

  // set each song to loop and then immediately pause it so it doesn't play

  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();

}

function setup() {

  createCanvas(400, 400);

}

function draw() {
  background(100);
  switch (myState) {

    case 0: // trigger the playing, and go immediately to the next state
      song1.play();
      myState = 1;  // go immediately (the next time) to the next state
      break;


    case 1:
    // hang out in here, put some lyrics or pictures or something while the song plays.
    // put pictures and shapes in here

      break;  // we would only leave state 1 with a mouseClick



    case 2: // trigger the playing, and go immediately to the next state
      song2.play();
      myState = 3;
      break;

    case 3:
      break;

    case 4:
      song3.play();
      myState = 5;
      break;

    case 5:
      break;

  }


}

function mouseReleased() {
  myState++;

  // pause all the songs
  song1.pause();
  song2.pause();
  song3.pause();

  if (myState > 5) {
    myState = 0;
  }
}
