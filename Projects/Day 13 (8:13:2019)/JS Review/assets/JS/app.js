// This is to make sure the link between the index and javascript file is there. 
// console.log('Hello World');

// This containerDiv variable, holds the relationship between javascript and the index.html page. 
const containerDiv = document.getElementById('container');
// This button varibale is tied to the button on the index.html.
const button = document.getElementById('click-button');
// This is the array used to store the random numbers we generate. 
var generatedNumber = [];
// This variable is used to hold the digits as we create the random number. 
var holder = '';

// This event listener is tied to the button. So when it is clicked, what ever is inside the curly brackets will be executed.  
button.addEventListener('click', function() {
  // When the button is clicked, we run the following function. 
  createRandomNumber();
});
// console.log(generatedNumber);

// This is the function designed to create the random number. (Remember it is 9 characters long.)
function createRandomNumber () {
  // This for loop is designed to start at 1 and go to 9.
  for (var i = 1; i < 10; i++) {
    // You generate just 1 number here between 0 & 9.
    var number = Math.floor(Math.random() * 9);

    // console.log(`${number}: Inside the loop`);

    // Here you turn that number generated into a string so you can cancatenate them easily.
    var stringNumber = number.toString();
    // Here we are taken the string we just created above and adding it to the holder variable. 
    holder += stringNumber;
  }
  // once we have created the number that is 9 digits long, We then put it in the generatedNumber array.
   generatedNumber.push(holder);
   // Here we call this function to display that number to the user. 
   displayLottoNumber();
}
// This is the function designed to display the random number once it has been generated
function displayLottoNumber () {
  // We empty the holder variable so the next time the button is pushed, it doesn't have anything left in it. 
  holder = '';

  // console.log(`Holder Value: ${holder}`);

  // This for loop loops through the generatedNumber array (where we stored the number we generated)
  for (var i = 0; i < generatedNumber.length; i++) {
    // Here we create a new h1 tag in html and set it to the variable h1. 
    var h1 = document.createElement('h1');
    // Here we set the text of that H1. 
    h1.textContent = generatedNumber[i];  
  }
  // This then saves that h1 inside the appropriate div on the index.html page we called containerDiv.
  containerDiv.appendChild(h1);
}
