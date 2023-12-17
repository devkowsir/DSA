// https://leetcode.com/problems/merge-sorted-array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1;

  while (j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[i + j + 1] = nums1[i];
      i--;
    } else {
      nums1[i + j + 1] = nums2[j];
      j--;
    }
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
