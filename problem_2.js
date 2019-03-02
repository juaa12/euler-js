// Fibonacci calculation recursion
function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}

function calcEvenSumUpTo(limit) {
  let sum = 0;
  let first = 1;
  let second = 1;

  while (second < limit) {
    if (second % 2 === 0) {
      sum = sum + second;
    }
    temp = first + second;
    first = second;
    second = temp;
  }
  return sum;
}

const limit = 4000000;
console.log(`Final sum of even Fibonacci numbers up to ${limit}: `, calcEvenSumUpTo(limit));