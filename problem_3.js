// Project Euler: Problem 3
// =========================
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// Function to calculate if a number is a prime number
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function getHighestFactorial(num) {
  let tempNum = num;
  let largestFact = 0;

  let counter = 2;
  while (counter * counter <= tempNum) {
    if (tempNum % counter === 0 && isPrime(counter)) {
      tempNum = tempNum / counter;
      largestFact = counter;
    } else {
      // Following the fact that a prime can't be even besides 2
      counter = (counter === 2) ? 3 : counter + 2;
    }
  }
  if (tempNum > largestFact) { // the remainder is a prime number
    largestFact = tempNum;
  }

  return largestFact
}

const number = 600851475143
console.log(getHighestFactorial(number))