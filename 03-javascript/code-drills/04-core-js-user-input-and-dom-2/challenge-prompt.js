// Alerts, Prompts and Writing to DOM 2



// Using the `confirm` method, welcome the user to the Boba Shop and ask them if they would like a boba
// Store the user response in a variable `wantsBoba`
var wantsBoba = confirm("welcome to the boba shop! would you like some boba?");

// Create an if statement checking whether the user wanted boba from the earlier `confirm` dialogue
if (wantsBoba === true){
    var drinkFlavor;
    drinkFlavor = prompt("What flavor would you like your drink to be?");
    document.write("your " + drinkFlavor + " boba will be ready soon!");
}
    else {
        document.write ("goodbye! come back soon!");
    }


    // Declare a variable `drinkFlavor`

    
    // Prompt the user for what flavor they would like for their drink
    // Store their response into the variable `drinkFlavor`

    
    
    // Write to the DOM a message to the user telling them that their drink will be ready soon.
    // Use string concatenation in order to specify the flavor of their drink

    
// Else, write "Goodbye! Come back soon!" to the DOM


