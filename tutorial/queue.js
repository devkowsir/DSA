export default class Queue {
  #data;
  constructor() {
    this.#data = {};
    this.head = 0; // where first data is present
    this.tail = 0; // where data will be inserted
  }
  enqueue(element) {
    this.#data[this.tail++] = element;
  }
  dequeue() {
    const element = this.#data[this.head];
    delete this.#data[this.head++];
    return element;
  }
  print() {
    console.log(this.#data);
  }
  isEmpty() {
    return this.head === this.tail;
  }
  size() {
    return this.tail - this.head;
  }
  peek() {
    return this.#data[this.head];
  }
  search(element) {
    for (let i = this.head; i < this.tail; i++) {
      if (this.#data[i] === element) return true;
    }
    return false;
  }
}
