const { SinglyLinkedList } = require("./singly-linked-list");

class QueueUsingSinglyLinkedList {
  #data;
  constructor() {
    this.#data = new SinglyLinkedList();
  }
  enqueue(value) {
    this.#data.append(value);
  }
  dequeue() {
    return this.#data.removeIndex(0);
  }
  print() {
    this.#data.print();
  }
  isEmpty() {
    return this.#data.isEmpty();
  }
  size() {
    return this.#data.size;
  }
  peek() {
    return this.#data.head.value;
  }
  search(element) {
    return this.#data.search(element);
  }
}

module.exports = { QueueUsingSinglyLinkedList };
