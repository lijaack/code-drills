
function fizzBuzz(n) {
// ===================== YOUR WORK HERE =====================
var number = process.argv[2]

for (var i = 0; i < number; i++){
    var output = "";
    if (i % 3 === 0){output += "Fizz"};
    if (i % 5 === 0){output += "Buzz"};
    if (output === ""){output = i};
    console.log(output);
}


// ==========================================================
  
}

fizzBuzz(/*Pass an argument from the command line*/)

