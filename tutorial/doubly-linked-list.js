class DoublyNode {
  constructor(val = undefined, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  #head;
  #tail;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.size = 0;
  }
  getList() {
    const list1 = [],
      list2 = [];
    let root = this.#head;
    while (root) {
      list1.push(root.val);
      root = root.next;
    }
    root = this.#tail;
    while (root) {
      list2.push(root.val);
      root = root.prev;
    }
    return [list1, list2];
  }
  prepend(val) {
    const node = new DoublyNode(val);
    node.next = this.#head;
    if (this.#head) this.#head.prev = node;
    this.#head = node;
    if (!this.#tail) this.#tail = node;
    this.size++;
  }
  append(val) {
    const node = new DoublyNode(val);
    node.prev = this.#tail;
    if (this.#tail) this.#tail.next = node;
    this.#tail = node;
    if (!this.#head) this.#head = node;
    this.size++;
  }
  insert(val, index) {
    if (index < 0 || index > this.size) return;
    else if (index === 0) this.prepend(val);
    else if (index === this.size) this.append(val);
    else {
      if (index < this.size / 2) {
        let root = this.#head,
          i = 0;
        while (root) {
          if (i < index - 1) {
            i++;
            root = root.next;
            continue;
          }
          const prev = root,
            next = root.next,
            node = new DoublyNode(val, prev, next);
          if (prev) prev.next = node;
          if (next) next.prev = node;
          break;
        }
      } else {
        let root = this.#tail,
          i = this.size - 1;
        while (root) {
          if (i > index) {
            i--;
            root = root.prev;
            continue;
          }
          const prev = root.prev,
            next = root,
            node = new DoublyNode(val, prev, next);
          if (prev) prev.next = node;
          if (next) next.prev = node;
          break;
        }
      }
      this.size++;
    }
  }
  removeIndex(index) {
    if (index < 0 || index > this.size - 1) return;
    else if (index === 0) {
      if (this.size > 1) {
        this.#head = this.#head.next;
        this.#head.prev = null;
      } else {
        this.#head = null;
        this.#tail = null;
      }
    } else if (index === this.size - 1) {
      if (this.#tail.prev) {
        this.#tail = this.#tail.prev;
        this.#tail.next = null;
      } else {
        this.#head = null;
        this.#tail = null;
      }
    } else {
      if (index < this.size / 2) {
        let root = this.#head,
          i = 0;
        while (root) {
          if (i < index) {
            i++;
            root = root.next;
            continue;
          }
          const prev = root.prev,
            next = root.next;
          if (prev) prev.next = next;
          if (next) next.prev = prev;
          break;
        }
      } else {
        let root = this.#tail,
          i = this.size - 1;
        while (root) {
          if (i > index) {
            i--;
            root = root.prev;
            continue;
          }
          const prev = root.prev,
            next = root.next;
          if (prev) prev.next = next;
          if (next) next.prev = prev;
          break;
        }
      }
    }
    this.size--;
  }
  indexOf(val) {
    let root = this.#head,
      i = 0;
    while (root) {
      if (root.val === val) return i;
      i++;
      root = root.next;
    }
    return -1;
  }
  valueOf(index) {
    if (index < 0 || index >= this.size) return null;
    let root = this.#head,
      i = 0;
    while (i < index) {
      root = root.next;
      i++;
    }
    return root.val;
  }
  removeValue(val) {
    let root = this.#head,
      i = 0;
    while (root) {
      if (root.val === val) {
        const prev = root.prev,
          next = root.next;
        if (prev) prev.next = next;
        else this.#head = next;
        if (next) next.prev = prev;
        else this.#tail = prev;
        this.size--;
        return i;
      }
      i++;
      root = root.next;
    }
    return -1;
  }
}

const list = new DoublyLinkedList();
list.append(1);
list.append(3);
list.append(5);
list.insert(2, 1);
list.insert(4, 3);
console.log(list.getList(), list.size);
list.removeIndex(0);
list.removeIndex(3);
console.log(list.getList(), list.size);
list.removeValue(2);
list.removeValue(4);
console.log(list.getList(), list.size);
console.log(list.indexOf(2), list.valueOf(0));

module.exports = { DoublyLinkedList };
