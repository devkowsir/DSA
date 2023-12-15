import SinglyLinkedList from "./singly-linked-list";

export default class StackUsingSinglyLinkedList {
  #data;
  constructor() {
    this.#data = new SinglyLinkedList();
  }
  push(item) {
    this.#data.prepend(item);
  }
  pop() {
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
  search(item) {
    return this.#data.search(item);
  }
}
