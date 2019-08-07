// -----------------------------------------------------------

// Putting an h1 element of html inside the empty div. 
// $('#empty-div').html('<h1>Hello World</h1>');

// Adding text to the empty div element. 
// $('#empty-div').append('A pleasure to meet you')

var drinkList = [
  "Coffee: $5",
  "Espresso: $7",
  "Cappuccino: $6",
  "Latte: $4",
  "Tea: $3",
  "Ice Coffee: $6",
  "Ice Espresso: $8",
  "Ice Latte: $6",
  "Ice Tea: $4"
];

// Take the Drink List and make it show up on the screen through jquery.

// Grabbing the Empty Div
let emptyDiv = $('#empty-div');
//Creating the ul to hold the options
let ul = $('<ul>');
// putting ul into the empyDiv
emptyDiv.append(ul);

// This is the For Loop version in JQuery
$.each(drinkList, function(i, drink) {
  let option = $('<option>');
  option.text(drink);
  ul.append(option);
})

// This is the original way to write a for loop

// for (var i = 0; i < drinkList.length; i++) {
//   // Creating the option tag
//   let option = $('<option>');
//   // adding the text to option, at index i
//   option.text(drinkList[i]);
//   // This takes the option and appends it to the ul. Making it visible.
//   ul.append(option);
// }

// ------------------------------------------------------------

let button = $('#button').on('click', function() {
  console.log('You Clicked The Button');
});