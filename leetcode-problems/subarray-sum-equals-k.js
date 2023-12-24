// https://leetcode.com/problems/subarray-sum-equals-k/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map();
  let count = 0;
  for (let i = 1; i < nums.length; i++) nums[i] += nums[i - 1];
  for (let i = 0; i < nums.length; i++) {
    const prefixSum = nums[i];
    if (prefixSum === k) count++;
    const targetCount = map.get(prefixSum - k);
    if (targetCount) count += targetCount;
    const prefixSumCount = map.get(prefixSum);
    map.set(prefixSum, prefixSumCount ? prefixSumCount + 1 : 1);
  }
  return count;
};

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([1, -1, 0], 0));
