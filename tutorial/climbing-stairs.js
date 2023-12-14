// https://leetcode.com/problems/climbing-stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  const ways = {
    1: 1,
    2: 2,
  };
  for (let i = 3; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }
  return ways[n];
};

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
