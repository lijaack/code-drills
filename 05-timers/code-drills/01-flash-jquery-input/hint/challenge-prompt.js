// Day 01
// Activity 01


// wait for the DOM to finish loading (document.ready)
$(document).ready(function(){



  // Create a click listener for the submit button
  $("#submit-button").on("click", function(){
    event.preventDefault();
    var firstName=$("#first-name").val();
    var lastName = $("#last-name").val();
    var occupation = $("#occupation").val();
    var city = $("#city").val();
    var state = $("#state").val();

    $("#first-name").val("");
    $("#last-name").val("");
    $("#occupation").val("");
    $("#city").val("");
    $("#state").val("");

    var name = $("<p>").text(firstName + " " + lastName);
    var occupation2 = $("<p>").text(occupation);
    var location2 = $("<p>").text(city + ", " + state);
    $("#displayHere").empty();
    $("#displayHere").append(name, occupation2, location2);

  })

    // stop the default behavior of the submit button



    // pull the values off the user input form and store them in seperate variables



    // clear the form after we're done storing the values



    // generate the divs needed to display the user data and put the values 
    // we stored from the form inside the divs



    // empty the display area and display the divs we just created in the display area

})
