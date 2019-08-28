var containerDiv = $('#to-dos');
var inputFromUser = document.getElementById('to-do').value;

var buttonArray = [];

$('#add-to-do').on('click', function(event) {
  event.preventDefault();
  buttonArray.push(inputFromUser);
  console.log(buttonArray);
});
