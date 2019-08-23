 // Things to accomplish:
// Get an API Key from OpenWeatherMap API
// Create an AJAX call to retrieve data Log the data in console
// Log the data in HTML
// Scream Ushindi (victory in Swahili)! at the top of your lungs
console.log('Hello');
var city = 'Nashville';
// API Key
var apiKEY = '74f8c71bba69de5d6695938b361a2e2f';

var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=${apiKEY}`;

var options = {
  url: queryURL,
  method: 'GET'
}

// Ajax Call 
$.ajax(options).then(function(response) {
  console.log(response);
});

// STILL NEED TO DO THE HTML PORTION OF THIS
