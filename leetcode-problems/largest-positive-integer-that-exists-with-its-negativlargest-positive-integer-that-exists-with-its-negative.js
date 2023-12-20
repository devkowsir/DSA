// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  const set = new Set();
  let largest = 0;
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
    if (set.has(-nums[i]) && Math.abs(nums[i]) > largest)
      largest = Math.abs(nums[i]);
  }
  return largest === 0 ? -1 : largest;
};

console.log(findMaxK([-1, 2, -3, 3]));
console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
console.log(findMaxK([-10, 8, 6, 7, -2, -3]));
