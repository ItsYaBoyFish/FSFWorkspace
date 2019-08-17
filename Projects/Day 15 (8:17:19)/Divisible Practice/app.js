console.log('Hello World');

// counts to 100
for (var i = 1; i < 101; i++) {
  // Check To see if 'i' is divisible by 3. 
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
    // Check to see if 'i' is divisible by 5.
  } else if (i % 3 === 0) {
    console.log('Fizz');
     // Check to see if 'i' is divisble by both 3 and 5.
  } else  if (i % 5 === 0) {
    console.log('Buzz');
  }
    // If none of those arguements check out, console log i. 
   else {
    console.log(i);
  }
}