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

    break;

    case 1:
    background('blue');
    text("Who's there?", 100, 100);

    break;

    case 2:
    background('green');
    text("No one", 100, 100);

    break;

    case 3:
    background('yellow');
    text("....", 100, 100);

    break;

  }

}
