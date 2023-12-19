// https://leetcode.com/problems/min-cost-climbing-stairs
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  if (cost.length === 2) return Math.min(cost[0], cost[1]);
  const minCosts = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
    minCosts[i] = Math.min(minCosts[i - 1], minCosts[i - 2]) + cost[i];
  }
  return Math.min(minCosts[minCosts.length - 1], minCosts[minCosts.length - 2]);
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
