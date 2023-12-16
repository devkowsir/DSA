// https://leetcode.com/problems/remove-duplicates-from-sorted-array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[k] !== nums[i]) nums[++k] = nums[i];
  }

  return k + 1;
};
let nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1), nums1);
let nums2 = [1, 2, 2];
console.log(removeDuplicates(nums2), nums2);
let nums3 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums3), nums3);
