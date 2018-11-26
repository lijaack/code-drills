// Wibble Wobble

// This function checks whether the argument string fulfills the requirements
// for "Wibble". It should return true if the string has an even number of characters
// and false if it doesn't
function checkWibble(str) {

  // ---------- Your Code Here ----------
  if(str.length % 2 === 0){
    return true;
  } else {
    return false;
  }







  // ----------- End Code Area -----------

}


// This function checks whether the argument string fulfills the requirements
// for "Wobble". It should return true if the string has an odd number of vowels
// and false if it doesn't
function checkWobble(str) {

  // ---------- Your Code Here ----------
  var vowels = ["a", "e", "i", "o", "u"]; 
  var count = 0;

  for (var i=0; i < str.length; i++){
    
    if (vowels.indexOf(str[i]) > -1){
      count++
      
    }
  
  } 
  if (count % 2 !==0){
    return true;
  }
  
  // var vowels = "aeiou";
  // var vowelCount = 0;
  // for (var i = 0; i < str.length; i++) {
  //   if (vowels.includes(str[i])) {
  //     vowelCount += 1;
  //   }
  // }
  // return (vowelCount % 2 !== 0);





  // ----------- End Code Area -----------

}


// This is the `wibbleWobble` function. It takes in an array of strings and replaces
// the elements that have an even number of characters with "Wibble" and the elements
// that have an odd number of vowels with "Wobble". If a element has both an even number
// of characters and an odd number of vowels, it should replace that element with
// "WibbleWobble". 

function wibbleWobble(arr) {
  
  // ---------- Your Code Here ----------
  for (var i = 0; i < arr.length; i++){
    var wibble = checkWibble(arr[i]);
    var wobble = checkWobble(arr[i]);

    if (wibble && wobble){
      arr[i] = "wibblewobble";
    } else if (wibble){
      arr[i] = "wibble";
    } else if (wobble){
      arr[i] = "wobble";
    }
  




  }
  // ----------- End Code Area -----------
  return arr;
}


// The following code will call on your function and display the results on the webpage
$(function() {

  // This is the array we're going to use to test your code:
  var testArray = [
    "respond",
    "even",
    "banana",
    "hello",
    "goodbye",
    "yes",
    "okay",
    "seeks",
    "desk",
    "amazing",
    "wonder",
    "excel",
    "achieves",
    "someone",
    "people",
    "odd"
  ]

  // Make a copy of the testArray to use with the `wibbleWobble` function
  var newArray = wibbleWobble(testArray.slice(0));

  // This populates our table with the initial values of the array
  // and what they are after our `wibbleWobble` function
  for (var i = 0; i < testArray.length; i++) {
    var newRow = $("<tr>")
    newRow.append($("<td>").text(testArray[i]));
    newRow.append($("<td>").text(newArray[i]));
    $("#display").append(newRow);
  }

})