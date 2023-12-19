// https://leetcode.com/problems/fibonacci-number
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const F = [0, 1];

  if (n < 2) return F[n];
  for (let i = 2; i <= n; i++) {
    F[i] = F[i - 1] + F[i - 2];
  }

  return F[n];
};

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
