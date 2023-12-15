export default class Stack {
  #data;
  constructor() {
    this.#data = [];
  }
  push(item) {
    this.#data.push(item);
  }
  pop() {
    return this.#data.pop();
  }
  entries() {
    return this.#data;
  }
  isEmpty() {
    return this.#data.length === 0;
  }
  size() {
    return this.#data.length;
  }
  peek() {
    return this.#data[this.#data.length - 1];
  }
  search(item) {
    return this.#data.includes(item);
  }
}
