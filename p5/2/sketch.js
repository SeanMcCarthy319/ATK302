var myState = 0 ; // assume this is at the top of the program, before the setup

function setup() {
  // put setup code here
  createCanvas(800, 800) ;
}

function draw() {
  // put drawing code here

  switch(myState) {

     case 0:
     console.log("Go") ;
     myState = 7 ;
     break ;

     case 1:
     console.log("You") ;
     myState = 2 ;
     break ;

     case 2:
     console.log("Redbirds!") ;
     myState = 0 ;
     break ;

  }

}
