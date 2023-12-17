// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
class TreeNode {
  constructor(val, left, right) {
    if (val === undefined) throw Error("Node should must have a value");
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  let n = nums.length;
  if (n === 0) return null;

  n = Math.floor(n / 2);
  return {
    left: sortedArrayToBST(nums.slice(0, n)),
    val: nums[n],
    right: sortedArrayToBST(nums.slice(n + 1)),
  };
};

console.log(sortedArrayToBST([-3, 0, 5]));
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
