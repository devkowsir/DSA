export default class HashTable {
  #values;
  constructor(capacity) {
    this.#values = new Array(capacity);
    this.capacity = capacity;
  }
  #hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) total += key.charCodeAt(i);
    return total % this.capacity;
  }
  set(key, value) {
    const index = this.#hash(key);
    if (this.#values[index] && this.#values[index].length) {
      const prevIndex = this.#values[index].findIndex(
        (item) => item[0] === key
      );
      if (prevIndex > -1) this.#values[index][prevIndex] = value;
      else this.#values[index].push([key, value]);
    } else this.#values[index] = [[key, value]];
  }
  get(key) {
    const index = this.#hash(key);
    if (this.#values[index] && this.#values[index].length)
      return this.#values[index].find((item) => item[0] === key)[1];
  }
  remove(key) {
    const index = this.#hash(key);
    if (this.#values[index] && this.#values[index].length) {
      const prevIndex = this.#values[index].findIndex(
        (item) => item[0] === key
      );
      console.log(prevIndex);
      if (prevIndex > -1) return this.#values[index].splice(prevIndex, 1)[0][1];
    }
  }
  entries() {
    const entries = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.#values[i] && this.#values[i].length)
        entries.push(...this.#values[i]);
    }
    return entries;
  }
}
