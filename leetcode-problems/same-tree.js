// https://leetcode.com/problems/same-tree
class TreeNode {
  constructor(val, left, right) {
    if (val === undefined) throw Error("Node should must have a value");
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const pStack = [p],
    qStack = [q];

  while (pStack.length > 0 && qStack.length > 0) {
    const pNode = pStack.pop();
    const qNode = qStack.pop();

    if (!pNode && !qNode) continue;
    else if (!pNode || !qNode || pNode.val !== qNode.val) return false;

    pStack.push(pNode.left);
    pStack.push(pNode.right);
    qStack.push(qNode.left);
    qStack.push(qNode.right);
  }

  return pStack.length === 0 && qStack.length === 0;
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

console.log(isSameTree(binaryTree1, binaryTree1));
console.log(isSameTree(binaryTree2, binaryTree2));
console.log(isSameTree(binaryTree3, binaryTree3));
console.log(isSameTree(binaryTree4, binaryTree4));
console.log(isSameTree(binaryTree1, binaryTree2));
console.log(isSameTree(binaryTree1, binaryTree3));
console.log(isSameTree(binaryTree1, binaryTree4));
console.log(isSameTree(binaryTree2, binaryTree1));
console.log(isSameTree(binaryTree2, binaryTree3));
console.log(isSameTree(binaryTree2, binaryTree4));
console.log(isSameTree(binaryTree3, binaryTree1));
console.log(isSameTree(binaryTree3, binaryTree2));
console.log(isSameTree(binaryTree3, binaryTree4));
console.log(isSameTree(binaryTree4, binaryTree1));
console.log(isSameTree(binaryTree4, binaryTree2));
console.log(isSameTree(binaryTree4, binaryTree3));
