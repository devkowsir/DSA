export default class CircularQueue {
  #data;
  constructor(capacity) {
    this.#data = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.head = -1; // where first data is present
    this.tail = -1; // where last data is present
  }
  isFull() {
    return this.capacity === this.currentLength;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  enqueue(element) {
    if (this.isFull()) return;
    this.tail = (this.tail + 1) % this.capacity;
    this.#data[this.tail] = element;
    this.currentLength++;
    if (this.head === -1) this.head++;
  }
  dequeue() {
    if (this.isEmpty()) return null;
    const element = this.#data[this.head];
    this.#data[this.head] = null;
    this.head = (this.head + 1) % this.capacity;
    this.currentLength--;
    if (!this.isEmpty()) return element;
    this.head = -1;
    this.tail = -1;
    return element;
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.#data[this.head];
  }
  print() {
    if (this.isEmpty()) return;
    let i,
      string = "";
    for (i = this.head; i !== this.tail; i = (i + 1) % this.capacity)
      string += this.#data[i] + " ";
    string += this.#data[i];
    console.log(string);
  }
}
