// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  let w = 0;
  for (let i = 2; i < n; i++) {
    if (nums[i - w - 2] === nums[i]) {
      w++;
    } else {
      nums[i - w] = nums[i];
    }
  }
  return n - w;
};

console.log(removeDuplicates([1, 1, 2, 2, 3, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
