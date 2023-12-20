// https://leetcode.com/problems/find-subarrays-with-equal-sum
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length - 1; i++) {
    const sum = nums[i] + nums[i + 1];
    if (set.has(sum)) return true;
    else set.add(sum);
  }
  return false;
};

console.log(findSubarrays([4, 2, 4]));
console.log(findSubarrays([1, 2, 3, 4, 5]));
console.log(findSubarrays([0, 0, 0]));
