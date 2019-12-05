var locationData;
var num ;
var distance ;

function preload() {
  locationData = getCurrentPosition();
}


function setup(){
num = 0 ;
    intervalCurrentPosition(positionPing, 5000) ;
    createCanvas(displayWidth, displayHeight) ;
    textSize(24) ;
        text(("lat: "+locationData.latitude), 10, 40) ;
    text(("lon: "+locationData.longitude), 10, 80) ;
     //   text(("lon: "+locationData.longitude).toFixed(6), 10, 40) ;
        text("accuracy = " + locationData.accuracy, 10, 120) ;
    /*
        text(locationData.altitude, 10, 100) ;
        text(locationData.altitudeAccuracy, 10, 120);
        text(locationData.heading, 10, 150);
        text(locationData.speed), 10, 180;
    */
    watchPosition(positionChanged) ;


    fence = new geoFence(locationData.latitude, locationData.longitude, .05, insideTheFence, outsideTheFence, 'mi');
}

function draw() {
}
function positionPing(position){
textSize(24) ;
num++ ;
background(255) ;
    text("lat: " + position.latitude, 10, 40);
    text("long: " + position.longitude, 10, 90);
text("number of updates " + num, 10, 140) ;

distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi') ;
text("you have moved " + distance, 10, 190) ;

}
//*****

//And here is another: GeoFence

// GEOLOCATION DATA
// This doesn't seem to work.


function setup() {
createCanvas(displayWidth, displayHeight) ;
textSize(24) ;
    text(("lat: "+locationData.latitude), 10, 40) ;
text(("lon: "+locationData.longitude), 10, 80) ;
 //   text(("lon: "+locationData.longitude).toFixed(6), 10, 40) ;
    text("accuracy = " + locationData.accuracy, 10, 120) ;
/*
    text(locationData.altitude, 10, 100) ;
    text(locationData.altitudeAccuracy, 10, 120);
    text(locationData.heading, 10, 150);
    text(locationData.speed), 10, 180;
*/
watchPosition(positionChanged) ;


fence = new geoFence(locationData.latitude, locationData.longitude, .05, insideTheFence, outsideTheFence, 'mi');
}

function draw() {
background(255) ;
 text(("lat: "+locationData.latitude), 10, 40) ;
text(("lon: "+locationData.longitude), 10, 80) ;
 //   text(("lon: "+locationData.longitude).toFixed(6), 10, 40) ;
    text("accuracy = " + locationData.accuracy, 10, 120) ;

if (fence.insideFence==true) {
text("inside fence", 10, 220); }
else {
text("outside fence", 10, 220) ;
}

}
function oops() {
println("oops") ;
}


function positionChanged(position){
    text("Position changed! lat: " + position.latitude, 10, 250);
    text("long: " + position.longitude, 10, 280);
}

function doThisOnLocation(position){
text("do this on location", 100, 40) ;
    text("lat: " + position.latitude, 100, 80);
    text("long: " + position.longitude, 100, 120);
}

function insideTheFence(position){
    print("INlat: " + position.latitude);
    print("INlong: " + position.longitude);
    text("user is inside of the fence", 100, 220) ;
}

function outsideTheFence(position){
    print("OUTlat: " + position.latitude);
    print("OUTlong: " + position.longitude);
    text("user is outside of the fence", 100, 220);
}
