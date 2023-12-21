// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  let minDifferenceBetweenExtremes = Infinity;
  const n = nums.length;
  for (let i = 0; i <= n - k; i++) {
    const diffBetweenExtremes = nums[i + k - 1] - nums[i];
    if (diffBetweenExtremes < minDifferenceBetweenExtremes)
      minDifferenceBetweenExtremes = diffBetweenExtremes;
  }
  return minDifferenceBetweenExtremes;
};

console.log(minimumDifference([90], 1));
console.log(minimumDifference([90, 91], 2));
console.log(minimumDifference([9, 4, 1, 7], 2));
console.log(
  minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6)
);
