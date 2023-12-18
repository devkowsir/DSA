// https://leetcode.com/problems/move-zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let winPos = 0,
    winSize = 0;

  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      winSize++;
    } else if (winSize) {
      const temp = nums[i];
      nums[winPos++] = temp;
      nums[i] = 0;
    } else winPos++;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1, 3, 12]));
console.log(moveZeroes([1, 0, 1]));
console.log(moveZeroes([0]));
