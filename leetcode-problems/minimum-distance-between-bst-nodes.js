// https://leetcode.com/problems/minimum-distance-between-bst-nodes
class TN {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {TN} root
 * @return {number}
 */
var minDiffInBST = function (root) {
  let diff = Infinity;
  const sortedArr = [];
  const stack = [];
  let node = root;
  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      sortedArr.push(node.val);
      node = node.right;
    }
  }
  for (let i = 1; i < sortedArr.length; i++) {
    const currDiff = Math.abs(sortedArr[i - 1] - sortedArr[i]);
    if (diff > currDiff) diff = currDiff;
  }
  return diff;
};

const bst1 = new TN(4, new TN(2, new TN(1), new TN(3)), new TN(6));
const bst2 = new TN(1, new TN(0), new TN(48, new TN(12), new TN(49)));
const bst3 = new TN(
  90,
  new TN(69, new TN(49, undefined, new TN(52)), new TN(89))
);

console.log(minDiffInBST(bst1));
console.log(minDiffInBST(bst2));
console.log(minDiffInBST(bst3));
