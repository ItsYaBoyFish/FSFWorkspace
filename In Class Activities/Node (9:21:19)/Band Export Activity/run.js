var myBands = require('./bandInfo.js');

// console.log(myBands);

const entries = Object.entries(myBands);
// console.log(entries);


function genreInput(userInput) {

  for ([genre, artist] of entries) {
    // This would list out all of the entries in the object.
    // console.log(`A ${genre} artist is ${artist}`);

    // This takes the input from the function and forces it to lower case
    var updatedInput = userInput.toLowerCase()
    // Here we compare the value that was inputed and compare it to the object. If it matches we log it. 
    if (updatedInput === genre) {
      // Here is the line where we console log out the result from the object if it matches the input given. 
      console.log(`A ${genre} artist is ${artist}`);
    }
  };
}

genreInput(process.argv[2]);



