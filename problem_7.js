// Project Euler: Problem 7
// =========================
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001 st prime number ?

// Function to calculate if a number is a prime number
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function findNPrime(n) {
  prime_count = 2
  candidate = 3

  while (prime_count < n) {
    candidate = candidate + 2

    if (isPrime(candidate)) {
      prime_count++
    }
  }

  return candidate
}

console.log(findNPrime(10001))