// https://leetcode.com/problems/search-insert-position
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let res = nums.length;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] > target) {
      res = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else return mid;
  }
  return res;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 6));
console.log(searchInsert([1], 1));
