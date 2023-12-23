// https://leetcode.com/problems/product-of-array-except-self/description/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const out = [1],
    len = nums.length - 1;

  for (let i = 1; i <= len; i++) out[i] = out[i - 1] * nums[i - 1];
  let right = 1;
  for (let i = len; i >= 0; i--) {
    out[i] *= right;
    right *= nums[i];
  }

  return out;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
