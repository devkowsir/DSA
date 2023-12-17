// https://leetcode.com/problems/climbing-stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 3) return n;
  const ways = [1, 2];
  for (let i = 2; i < n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }
  return ways[n - 1];
};
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
