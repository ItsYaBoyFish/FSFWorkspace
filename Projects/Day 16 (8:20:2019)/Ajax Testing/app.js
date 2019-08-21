var title = 'ryan+gosling;';
var apiKey = 'viTwv68wnFEJSWoOmvpBgoHYAcAqGFpN'
//var queryURL = `http://www.omdbapi.com/?t=${title}&apikey=trilogy`;
var gifURL = `http://api.giphy.com/v1/gifs/search?q=${title}&api_key=${apiKey}`

let options = {
  method: 'GET',
  url: gifURL
}

$.ajax(options).then(function(response) {
  console.log(response);
});

// fetch(queryURL).then(function(response) {
//   console.log(response.json())
// });