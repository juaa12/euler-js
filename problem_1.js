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