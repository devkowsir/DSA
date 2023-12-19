// https://leetcode.com/problems/n-th-tribonacci-number
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const T = [0, 1, 1];
  if (n < 3) return T[n];
  for (let i = 3; i <= n; i++) {
    T[i] = T[i - 1] + T[i - 2] + T[i - 3];
  }
  return T[n];
};

console.log(tribonacci(25));
