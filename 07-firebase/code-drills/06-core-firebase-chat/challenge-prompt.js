// Firebase Chat

var config = {
  apiKey: "AIzaSyCWhpYJiH-C1_48_bexU8JGQn4AHn9ghkw",
  authDomain: "project-ucb.firebaseapp.com",
  databaseURL: "https://project-ucb.firebaseio.com",
  projectId: "project-ucb",
  storageBucket: "project-ucb.appspot.com",
  messagingSenderId: "117886055106"
};

firebase.initializeApp(config);
// creating a variable that references our database, so we don't have to type
// it out every time
var database = firebase.database();

// Document.ready shorthand
$(function() {

  // -------------------- Your Code Here --------------------

  database.ref().on("child_added", function (childSnapshot) {
    var chat = $("<p>");

    chat.text(childSnapshot.val());

    $("#chat-display").append(chat);

  });
  
  $(document).on("click", "button[type=submit]", function (event){
    event.preventDefault();
    var chatMessage = $("input[type=text]").val().trim();
    $("#chat-input").val("");
    database.ref().push(chatMessage);
  })
  
 

  // --------------------- End Code Area --------------------

})

