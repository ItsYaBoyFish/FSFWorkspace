// Our First Attempt.

// function primeChecker(number) {
//   if (number % number === 1 && number % 1 === 1) {
//     console.log(`This number is prime: ${number}`);
//   } else {
//     console.log(`This number is not prime: ${number}`);
//   }
// };

// // primeChecker(13);


// SOLUTION

var isPrime = function(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log(`${number} Is Not Prime`);
      return false;
    } else {
      console.log(`${number} Is Prime`);
      return true;
    }
  };
};

isPrime(999983);