/**
 * Bubble Sort
 * @param {number[]} numbers
 * @param {(a: number, b: number) => number} compareFn
 * @returns {number[]}
 */
function bubbleSort(numbers, compareFn) {
  while (true) {
    let hasSwapped = false;
    for (let i = 1; i < numbers.length; i++) {
      const compareRes = compareFn(numbers[i - 1], numbers[i]);
      if (compareRes > 0) {
        const temp = numbers[i];
        numbers[i] = numbers[i - 1];
        numbers[i - 1] = temp;
        hasSwapped = true;
      }
    }
    if (!hasSwapped) break;
  }
  return numbers;
}

console.log(bubbleSort([1, 5, 2, 4, 8, 10, 12, 7], (a, b) => b - a));
