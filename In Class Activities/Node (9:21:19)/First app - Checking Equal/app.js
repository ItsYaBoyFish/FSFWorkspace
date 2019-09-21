console.log('Hello');

// if (process.argv[2] === process.argv[3]) {
//   console.log('They are equal');
// } else {
//   console.log('They are not equal.');
// };

function testingNumbers(num1, num2) {

  if (num1 === num2) {
    console.log(`${num1} is equal to ${num2}`);
  } else {
    console.log(`${num1} is not equal to ${num2}`);
  }
}

testingNumbers(process.argv[2], process.argv[3]);




