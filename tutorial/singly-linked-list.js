class SinglyNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  print() {
    let listValues = "",
      curr = this.head;
    while (curr) {
      listValues += curr.value + " ";
      curr = curr.next;
    }
    console.log(listValues);
  }
  prepend(value) {
    this.head = new SinglyNode(value, this.head);
    if (this.tail === null) this.tail = this.head;
    this.size++;
  }
  append(value) {
    const node = new SinglyNode(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = this.head;
      this.size++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.size++;
    }
  }
  insert(value, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.prepend(value);
      return;
    } else if (index === this.size) {
      this.append(value);
    } else {
      let curr = this.head,
        i = 0;
      while (++i < index) curr = curr.next;
      curr.next = new SinglyNode(value, curr.next);
      this.size++;
    }
  }
  removeIndex(index) {
    if (index < 0 || index >= this.size) return null;
    this.size--;
    if (index === 0) {
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    } else if (index === this.size - 1) {
      const value = this.tail.value;
      this.tail = null;
      return value;
    } else {
      let curr = this.head,
        i = 0;
      while (++i < index) curr = curr.next;
      const next = curr.next;
      curr.next = next.next;
      return next.value;
    }
  }
  removeValue(value) {
    if (this.size === 0) return null;
    let curr = this.head,
      next = this.head.next;
    if (curr.value === value) {
      this.head = curr.next;
      this.size--;
      return curr.value;
    }
    while (next) {
      if (next.value !== value) {
        curr = next;
        next = next.next;
        continue;
      }
      curr.next = next.next;
      if (curr.next === null) this.tail = curr;
      this.size--;
      return next.value;
    }
    return null;
  }
  search(value) {
    if (this.size === 0) return -1;
    let i = 0,
      curr = this.head;
    while (curr) {
      if (curr.value === value) return i;
      curr = curr.next;
      i++;
    }
    return -1;
  }
  reverse() {
    let prev = null,
      curr = this.head;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.tail = this.head;
    this.head = prev;
  }
}

module.exports = { SinglyLinkedList };
