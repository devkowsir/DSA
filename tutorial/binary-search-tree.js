export class BinaryTreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export default class BinarySearchTree {
  #root;
  constructor() {
    this.#root = null;
  }
  isEmpty() {
    return this.#root === null;
  }

  insert(value) {
    const main = (root, node) => {
      if (node.value < root.value) {
        if (root.left === null) root.left = node;
        else main(root.left, node);
      } else if (node.value > root.value) {
        if (root.right === null) root.right = node;
        else main(root.right, node);
      } else return;
    };
    const node = new BinaryTreeNode(value);
    if (this.isEmpty()) {
      this.#root = node;
      return;
    }
    main(this.#root, node);
  }
  search(value) {
    const main = (root, value) => {
      if (root === null) return false;
      else if (value > root.value) main(root.right, value);
      else if (value < root.value) main(root.left, value);
      else return true;
    };
    if (this.isEmpty()) return false;
    main(this.#root, value);
  }
  preOrder() {
    const res = [];
    const main = (root, arr) => {
      if (root !== null) {
        arr.push(root.value);
        main(root.left, arr);
        main(root.right, arr);
      }
    };
    main(this.#root, res);
    return res;
  }
  inOrder() {
    const res = [];
    const main = (root, arr) => {
      if (root !== null) {
        main(root.left, arr);
        arr.push(root.value);
        main(root.right, arr);
      }
    };
    main(this.#root, res);
    return res;
  }
  postOrder() {
    const res = [];
    const main = (root, arr) => {
      if (root !== null) {
        main(root.left, arr);
        main(root.right, arr);
        arr.push(root.value);
      }
    };
    main(this.#root, res);
    return res;
  }
  levelOrder() {
    const res = [];
    const queue = new Queue();
    queue.enqueue(this.#root);
    while (queue.size() !== 0) {
      const node = queue.dequeue();
      if (node && node.value) res.push(node.value);
      if (node && node.left) queue.enqueue(node.left);
      if (node && node.right) queue.enqueue(node.right);
    }
    return res;
  }
  min() {
    const main = (root) => {
      if (root.left === null) return root.value;
      else return main(root.left);
    };
    return main(this.#root);
  }
  max() {
    const main = (root) => {
      if (root.right === null) return root.value;
      else return main(root.right);
    };
    return main(this.#root);
  }
}
