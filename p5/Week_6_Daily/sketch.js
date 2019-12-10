var myTimer = 200 ;

function setup() {
  // put setup code here
  createCanvas(800, 800) ;
}

function draw() {
  // put drawing code here
  console.log();

  switch (mystate) {

    case 0:
    background('red');
    text("knock, knock", 100, 100);
    if (myTimer >= 300) {

        myState++ ;  // this will go to the next state. You can also put myState = 3 or something
        myTimer = 0 ;  // people always forget to reset the timer!!

     }

    break;

    case 1:
    background('blue');
    text("Who's there?", 100, 100);
    if (myTimer >= 300) {

        myState++ ;  // this will go to the next state. You can also put myState = 3 or something
        myTimer = 0 ;  // people always forget to reset the timer!!

     }

    break;

    case 2:
    background('green');
    text("No one", 100, 100);
    if (myTimer >= 300) {

        myState++ ;  // this will go to the next state. You can also put myState = 3 or something
        myTimer = 0 ;  // people always forget to reset the timer!!

     }

    break;

    case 3:
    background('yellow');
    text("....", 100, 100);
    if (myTimer >= 300) {

        myState++ ;  // this will go to the next state. You can also put myState = 3 or something
        myTimer = 0 ;  // people always forget to reset the timer!!

     }

    break;

  }

}
