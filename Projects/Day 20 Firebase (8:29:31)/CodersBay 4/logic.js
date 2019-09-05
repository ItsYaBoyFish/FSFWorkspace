// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
 // Your web app's Firebase configuration
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

// Assign the reference to the database to a variable named 'database'
// var database = ...

var database = firebase.database();
// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highPrice = snapshot.val().highPrice;
    highBidder = snapshot.val().highBidder;

    console.log(highPrice);


    // Change the HTML to reflect the stored values
  $('#highest-bidder').text(highBidder);
  $('#highest-price').text(highPrice);

    // Print the data to the console.

    console.log(snapshot.val());
  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $('#highest-bidder').text(initialBidder);
    $('#highest-price').text(initialBid);

    // Print the data to the console.
    console.log(initialBidder);
    console.log(initialBid);

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var bidderName = $('#bidder-name').val();
  var bidderPrice = $('#bidder-price').val();
  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert(bidderName + "You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highBidder: bidderName,
      highPrice: bidderPrice
    });

    // Log the new High Price


    // Store the new high price and bidder name as a local variable
    $('#highest-bidder').text(highBidder);
    $('#highest-price').text(highPrice);
    
    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
