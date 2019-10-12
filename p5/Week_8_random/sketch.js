var bands = ['Pearl Jam', 'David Bowie', 'The Doors', 'Green Day', 'Smashing Pumpkins', 'Rage Against the Machine'] ;
var aRandomBand = '' ;
// /n

function setup() {
  // put setup code here

  function setup() {
    createCanvas(800, 800) ;
    textAlign(CENTER, CENTER) ;
  }

  function draw() {
    background(100) ;
    textSize(48);
    text(aRandomBand, width/2, height/2) ;
  }

  function mouseClicked() {

    var i = floor(random(bands.length)) ;  // floor changes the random to an integer

    aRandomBand = bands[i] ;


  }




}
