/**
 * Merge Sort
 * @param {number[]} numbers
 * @returns {number[]}
 */
function mergeSort(numbers) {
  const merge = (left, right) => {
    let i = 0,
      j = 0;
    const temp = [],
      leftLen = left.length,
      rightLen = right.length;
    while (i < leftLen && j < rightLen) {
      if (left[i] > right[j]) temp.push(right[j++]);
      else temp.push(left[i++]);
    }
    return [...temp, ...left.slice(i), ...right.slice(j)];
  };

  const split = (numbers) => {
    if (numbers.length <= 1) return numbers;

    const mid = Math.floor(numbers.length / 2);
    const left = numbers.slice(0, mid);
    const right = numbers.slice(mid);

    return merge(split(left), split(right));
  };

  return split(numbers);
}
