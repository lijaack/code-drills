var request = require("request");

var zip = process.argv[2];

var queryURL = "http://api.openweathermap.org/data/2.5/forecast?units=imperial&zip="+zip+",us&APPID=f4a8c006b50a10720402ed8930a9f381";

request(queryURL, function (error, response, body) {
    console.log(response)
    if (!error && response.statusCode === 200) {

      var forecast = JSON.parse(body).list;

      for (var i=0; i<forecast.length; i++) {
        console.log(forecast[i].dt_txt, forecast[i].main.temp)
      }

    } else {
      console.log(error)
    }
})