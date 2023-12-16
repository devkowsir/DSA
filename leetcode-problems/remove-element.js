// https://leetcode.com/problems/remove-element
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i--, 1);
    } else k++;
  }
  return k;
};

let nums1 = [3, 2, 2, 3];
console.log(nums1);
console.log(removeElement(nums1, 3), nums1);
let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(nums2);
console.log(removeElement(nums2, 2), nums2);
