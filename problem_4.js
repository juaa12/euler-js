// Project Euler: Problem 4
// =========================
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindromic(num) {
  let numToString = num.toString()

  for (let i = 0; i <= Math.floor(numToString.length / 2); i++) {
    const first = numToString.slice(0, 1)
    const last = numToString.slice(-1)

    if (first !== last) {
      return false
    }

    numToString = numToString.substring(1, numToString.length - 1)
  }

  return true
}

function findSolution() {
  let result = 0;

  // We know that one of the multipliers must divide by 11 since:
  // p * q = 11 * (9091a + 910b + 100c) <= 999^2
  for (let p = 990; p > 99; p -= 11) {
    for (let q = 999; q > 99; q--) {
      let candidate = p * q;

      if (result < candidate && isPalindromic(candidate)) {
        result = candidate;
        break;
      } else if (candidate < result) {
        break;
      }
    }
  }

  return result;
}

console.log(findSolution())