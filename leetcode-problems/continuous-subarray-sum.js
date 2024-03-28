// https://leetcode.com/problems/continuous-subarray-sum/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let prefixSum = 0;
  const remainderMap = new Map([[0, -1]]);

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    const remainder = prefixSum % k;

    if (!remainderMap.has(remainder)) remainderMap.set(remainder, i);
    else if (i - remainderMap.get(remainder) > 1) return true;
  }

  return false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6));
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));
