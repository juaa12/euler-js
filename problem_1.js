// Project Euler: Problem 1
// =========================
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// Following the equation for sum of n integers dividable by k
function sumK(numbers, k) {
  var div = Math.floor(numbers / k);
  return (k * div * (div + 1)) / 2;
}

function sumOfMultiples(numbers) {
  return sumK(numbers, 3) + sumK(numbers, 5) - sumK(numbers, 15);
}

const limit = 999;
console.log(`Sum of multiples up to ${limit}: `, sumOfMultiples(limit))