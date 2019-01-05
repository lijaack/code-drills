// ======== You are given NOTHING to start with 😱 ========
var fs = require("fs");

var args = [];

for (var i = 2 ; i < process.argv.length ; i++) {
    args.push(process.argv[i]);
}
  
var person = args.join(" ");

fs.readFile("quotes.txt", "utf8", function(error, data) {
  
    var fullQuotes = data.split(";");
  
    for (var i = 0 ; i < fullQuotes.length; i++) {
      var quote = fullQuotes[i].split("-");
  
      if (quote[1].toLocaleLowerCase() === person) {
  
        console.log(quote[0])
  
      }
    }
  });