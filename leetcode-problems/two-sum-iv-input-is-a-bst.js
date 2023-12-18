// https://leetcode.com/problems/two-sum-iv-input-is-a-bst
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const set = new Set();
  const dfs = (node) => {
    if (node === null) return false;
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    return dfs(node.left) || dfs(node.right);
  };
  return dfs(root);
};

const binaryTree1 = null;
const binaryTree2 = new TreeNode(1);
const binaryTree3 = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(
    2,
    new TreeNode(3, new TreeNode(4, new TreeNode(5)), new TreeNode(4))
  )
);
const binaryTree4 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(3)),
  new TreeNode(2, new TreeNode(3), new TreeNode(3))
);

console.log(findTarget(binaryTree1, 0));
console.log(findTarget(binaryTree2, 1));
console.log(findTarget(binaryTree3, 2));
console.log(findTarget(binaryTree4, 3));
