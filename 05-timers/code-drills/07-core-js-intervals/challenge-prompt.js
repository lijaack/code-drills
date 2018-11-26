// Set the interval


// ------------------------------------------------------------------
console.log("==================== Question 01 ====================");
// Create an interval that console logs "Question 01" every 5 seconds
function questionOne(){
    console.log("question 01");
}
var setOne = setInterval(questionOne, 5000)


// ------------------------------------------------------------------
console.log("==================== Question 02 ====================");
// Create an interval that creates an alert that says "Question 02" every 10 seconds
function questionTwo(){
    alert("Question 02");
}
var qTwo = setInterval(questionTwo, 10000);


// Clear the interval you made in this question
clearInterval(qTwo);


// ------------------------------------------------------------------
console.log("==================== Question 03 ====================");
// Create an interval that appends "3" to the div with an id of "question-03"
// every 2 seconds
function questionThree(){
    $("#question-03").append("3");
}
var setThree = setInterval(questionThree, 2000);

// ------------------------------------------------------------------
console.log("==================== Question 04 ====================");
// Create an interval that empties the "#question-03" element every 6 seconds
function questionFour(){
    $("#question-03").empty();
}
var setFour = setInterval(questionFour, 4000);


// ------------------------------------------------------------------
console.log("==================== Question 05 ====================");
// Create an interval that appends "5" to the div with an id of "question-05"
// every second and clear this interval after 5 seconds
var timer = 0;
function questionFive(){
    $("#question-05").append("5");
    timer++
    if (timer===5){
        clearInterval(setFive)
    }
}
var setFive = setInterval(questionFive, 1000);


// ------------------------------------------------------------------
console.log("==================== Question 06 ====================");
// Create an interval that appends "6" to the div with an id of "question-06"
// every second
var count = 0;
function questionSix(){
    $("#question-06").append("6");
        count++
    if (count===6){
        clearInterval(setSix)
    }
}
var setSix = setInterval(questionSix, 1000);


// Create a timer to clear the interval after 6 seconds



// ------------------------------------------------------------------
console.log("==================== Question 07 ====================");
// create a timer to clear the interval from question 1 after 10 seconds
setTimeout(function() {
    clearInterval(setOne)
}, 10000)


