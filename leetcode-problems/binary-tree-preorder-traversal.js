// https://leetcode.com/problems/binary-tree-preorder-traversal
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (root === null) return [];

  let node = root;
  const preorder = [];
  const stack = [];

  while (node !== null || stack.length !== 0) {
    if (node !== null) {
      preorder.push(node.val);
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      node = node.right;
    }
  }

  return preorder;
};

const binaryTree1 = null;
const binaryTree2 = new TreeNode(5);
const binaryTree3 = new TreeNode(
  1,
  undefined,
  new TreeNode(2, new TreeNode(3))
);
const binaryTree4 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

console.log(preorderTraversal(binaryTree1));
console.log(preorderTraversal(binaryTree2));
console.log(preorderTraversal(binaryTree3));
console.log(preorderTraversal(binaryTree4));
