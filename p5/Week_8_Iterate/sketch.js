function setup() {
  // put setup code here

  var names = []; // declaring an array
    names[0] = "chewie"; // putting chewie in the first space (which is space 0)
    names[1] = "leia";
    names[2] = "luke";
    names[3] = "kylo ren";


    for (var i = 0; i < names.length; i++) { // you can just copy this or memorize it

      console.log(names[i]);

    }

    var dwarves = [] ;  // creating (declaring) a new array with 7 Strings in it
    dwarves[0] = "dopey" ;
    dwarves[1] = "doc" ;
    dwarves[2] = "grumpy" ;
    dwarves[3] = "happy" ;
    dwarves[4] = "sleepy" ;
    dwarves[5] = "sneezy" ;
    dwarves[6] = "bashful" ;

    for (var i = 0; i < dwarves.length; i++) { // you can just copy this or memorize it

      console.log(dwarves[i]);
    }

    var randomNumbers = new Array(100) ;
    for (var i = 0; i < 100; i++) {
    randomNumbers[i] = random(100) ; // put a random number in the array
    //console.log(randomNumbers[i]) ;  // print out these array elements
     console.log("the number in space " + i + " = " + randomNumbers[i]) ;

}



}
