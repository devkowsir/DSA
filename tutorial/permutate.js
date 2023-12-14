/**
 * @returns {number[]}
 * @param {number[]} numbers
 */
function permutate(numbers) {
  const result = [];
  /**
   * @param {number[]} remainings
   * @param {number[]} prevItems
   */
  const main = (remainings, prevItems) => {
    if (remainings.length === 1) {
      prevItems.push(remainings[0]);
      result.push(prevItems);
      return;
    }
    for (let i = 0; i < remainings.length; i++) {
      main(
        [...remainings.slice(0, i), ...remainings.slice(i + 1)],
        [...prevItems, remainings[i]]
      );
    }
  };
  main(numbers, []);
  return result;
}

console.log(permutate([1, 2, 3]));
console.log(permutate([2, 4]));
console.log(permutate([4, 6, 8]));
console.log(permutate([1, 3, 5]));
