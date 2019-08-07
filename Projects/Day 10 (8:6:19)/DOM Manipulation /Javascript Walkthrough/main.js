let targetDiv = document.getElementById('empty-div');

targetDiv.textContent = "Hello Friends";
// Creating a new div and giving it context...
var newDiv = document.createElement('div');
newDiv.textContent = "A Pleasure to meet you";
// End of creation and context

// Telling the DOM the new div we created on line 5 is to be put inside of target div. 
targetDiv.appendChild(newDiv);
// ---------------------

// Giving the New Div a class of Fancy (See HTML page for styling)
newDiv.setAttribute('class','fancy');
newDiv.setAttribute('id','Cool');
// ------------------------------------