// require request
var request = require("request");

// grab the user command line input
var zip = process.argv[2];
if (!zip) {
  zip = 94123;
}

// Use your own API key here
var api_key = "f4a8c006b50a10720402ed8930a9f381";

// define the query URL
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?units=imperial&zip="+zip+",us&APPID="+api_key;

request(queryURL, function (error, response, body) {

    if (!error && response.statusCode === 200) {

      var forecast = JSON.parse(body).list;

      for (var i=0; i<forecast.length; i++) {
        console.log(forecast[i].dt_txt, forecast[i].main.temp)
      }

    } else {
      console.log(error)
    }
})