/**
 * Insertion Sort
 * @param {number[]} numbers
 * @returns {number[]}
 */
function insertionSort(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    const elementToInsert = numbers[i];

    for (let j = i; j >= 0; j--) {
      if (elementToInsert < numbers[j - 1]) {
        numbers[j] = numbers[j - 1];
      } else {
        numbers[j] = elementToInsert;
        break;
      }
    }
  }
  return numbers;
}

