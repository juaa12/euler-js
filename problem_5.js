// Project Euler: Problem 5
// =========================
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?

function isDividable(number, divisor) {
  return number % divisor === 0;
}

function smallestDividable(highest_divisor) {
  found = false;
  num = highest_divisor;
  firstCheck = highest_divisor > 10 ? 11 : 2;

  while (found === false) {
    found = true;

    for (i = firstCheck; i <= highest_divisor; i++) {
      if (!isDividable(num, i)) {
        found = false;
        break;
      }
    }
    num = num + highest_divisor;
  }

  return num - highest_divisor;
}

console.log(smallestDividable(20));
