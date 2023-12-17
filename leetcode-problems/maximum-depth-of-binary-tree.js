// https://leetcode.com/problems/maximum-depth-of-binary-tree
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  const dfs = (node, h) => {
    if (!node) return h;
    h++;
    return Math.max(dfs(node.left, h), dfs(node.right, h));
  };

  return dfs(root, 0);
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

console.log(maxDepth(binaryTree1));
console.log(maxDepth(binaryTree2));
console.log(maxDepth(binaryTree3));
console.log(maxDepth(binaryTree4));
