/**
 * Quick Sort
 * @param {number[]} numbers
 * @returns {number[]}
 */
function mergeSort(numbers) {
  if (numbers.length < 2) return numbers;
  let pivot = numbers[0];
  const left = [],
    right = [];

  for (let i = 1; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > pivot) {
      right.push(element);
    } else {
      left.push(element);
    }
  }

  return [...mergeSort(left), pivot, ...mergeSort(right)];
}

