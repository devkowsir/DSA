// https://leetcode.com/problems/sort-colors/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let lp = 0,
    mp = 0,
    rp = nums.length - 1;
  while (mp <= rp) {
    const num = nums[mp];
    if (num === 0) {
      nums[mp] = nums[lp];
      nums[lp] = num;
      lp++, mp++;
    } else if (num === 2) {
      nums[mp] = nums[rp];
      nums[rp] = num;
      rp--;
    } else mp++;
  }
  return nums;
};

console.log(sortColors([2, 2, 0]));
console.log(sortColors([1, 2, 0]));
console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
console.log(sortColors([0, 0, 0]));
console.log(sortColors([1, 1, 1]));
console.log(sortColors([2, 2, 2]));
console.log(sortColors([0]));
console.log(sortColors([1]));
console.log(sortColors([2]));
