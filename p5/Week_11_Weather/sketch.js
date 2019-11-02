var weather = 0;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var ws = 0;


function setup() {
  createCanvas(500, 500);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&';
  var myIDString = 'appid=b9cc67f3e77d4399a4b45fceeb581cc7'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed;
  temperature = weather.main.temp;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);
      fill('black');
      text("we have weather" + weather.name, 20, 20);
      text("temperature is " + weather.main.temp, 20, 40);
      text("humidity is " + weather.main.humidity, 20, 60);
      text("wind speed = " + weather.wind.speed, 20, 80);

      fill('white');
      noStroke();
      ellipse(x, 300, 200, 100);
      x = x + ws / 3;
      if (x > width) x = 0;

      fill('red');
      var mappedTemp = 0;
      mappedTemp = map(temperature, -10, 100, 0, height);
      rect(width - 30, height - 10, 20, mappedTemp);
      // parse the weather object and put some text for some at least 3 different weather data!
      break;

  }
}
