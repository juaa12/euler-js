// Project Euler: Problem 6
// =========================
// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumOfSquares(num) {
  sum = 0

  for (i = 0; i <= num; i++) {
    sum = sum + (i * i)
  }

  return sum
}

function squareOfSum(num) {
  sum = 0

  for (i = 0; i <= num; i++) {
    sum = sum + i
  }

  return (sum * sum)
}

function findDiff(num) {
  a = sumOfSquares(num)
  b = squareOfSum(num)

  return (b - a)
}

console.log(findDiff(100))