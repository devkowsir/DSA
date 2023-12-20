// https://leetcode.com/problems/apply-operations-to-an-array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  let i = 0;
  for (; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }
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

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
console.log(applyOperations([0, 1]));
console.log(applyOperations([1, 2, 2, 2, 1, 1, 1, 0]));
