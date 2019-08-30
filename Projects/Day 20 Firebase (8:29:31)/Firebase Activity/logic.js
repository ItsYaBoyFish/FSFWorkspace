// Initialize Firebase (YOUR OWN APP)
// <!-- The core Firebase JS SDK is always required and must be listed first -->
  var firebaseConfig = {
    apiKey: "AIzaSyBje2ZyI-Kfq1RfDv17VbnmAaKT_1iEgUQ",
    authDomain: "fir-inclass-39713.firebaseapp.com",
    databaseURL: "https://fir-inclass-39713.firebaseio.com",
    projectId: "fir-inclass-39713",
    storageBucket: "",
    messagingSenderId: "68553070415",
    appId: "1:68553070415:web:07261536b45dc739"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Make sure that your configuration matches your firebase script version
// (Ex. 3.0 != 3.7.1)

// Create a variable to reference the database
// var database = ...

var db = firebase.database();



// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase.
// HINT: Assuming 'database' is our database variable, use...
// database.ref().on("value", function(snapshot)) {}



db.ref().on('value', function(snapshot) {
  console.log(snapshot.val());
  clickCount = snapshot.val().clickCounter;
  $('#click-value').text(clickCount);
});

// We are now inside our .on function...

// Console.log the "snapshot" value (a point-in-time representation of the database)
// This "snapshot" allows the page to get the most current values in firebase.

// Change the value of our clickCounter to match the value in the database
// ___________ = snapshot.val().______________________

// Console Log the value of the clickCounter

// Change the HTML using jQuery to reflect the updated clickCounter valu
// Then include Firebase error logging
// HINT: }, function(errorObject)

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {
  $('#click-value').text(clickCounter);
  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase

  db.ref().set({
    clickCount: clickCounter
  })
  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase

  db.ref().set({
    clickCount: clickCounter
  })
  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);


});
