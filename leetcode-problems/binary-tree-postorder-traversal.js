// https://leetcode.com/problems/binary-tree-postorder-traversal
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
var postorderTraversal = function (root) {
  if (root === null) return [];

  const stack = [[root, false]];
  const traverseRes = [];

  while (stack.length) {
    const [node, isVisited] = stack.pop();
    if (!node) continue;
    if (isVisited) traverseRes.push(node.val);
    else stack.push([node, true], [node.right, false], [node.left, false]);
  }

  return traverseRes;
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

console.log(postorderTraversal(binaryTree1));
console.log(postorderTraversal(binaryTree2));
console.log(postorderTraversal(binaryTree3));
console.log(postorderTraversal(binaryTree4));
