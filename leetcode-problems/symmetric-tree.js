// https://leetcode.com/problems/symmetric-tree
class TreeNode {
  constructor(val, left, right) {
    if (val === undefined) throw Error("Node should must have a value");
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true;
  const lStack = [root.left],
    rStack = [root.right];

  while (lStack.length > 0 && rStack.length > 0) {
    const lNode = lStack.pop();
    const rNode = rStack.pop();

    if (!lNode && !rNode) continue;
    else if (!lNode || !rNode || lNode.val !== rNode.val) return false;

    lStack.push(lNode.left);
    rStack.push(rNode.right);
    lStack.push(lNode.right);
    rStack.push(rNode.left);
  }

  return lStack.length === 0 && rStack.length === 0;
};

const bt1 = null;
const bt2 = new TreeNode(5);
const bt3 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), undefined),
  new TreeNode(2, new TreeNode(4), undefined)
);
const bt4 = new TreeNode(
  1,
  new TreeNode(2, undefined, new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), undefined)
);
const bt5 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

console.log(isSymmetric(bt1));
console.log(isSymmetric(bt2));
console.log(isSymmetric(bt3));
console.log(isSymmetric(bt4));
console.log(isSymmetric(bt5));
