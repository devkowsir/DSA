// https://leetcode.com/problems/unique-number-of-occurrences
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = hash[arr[i]] === undefined ? 1 : hash[arr[i]] + 1;
  }
  const occurrences = Object.values(hash);
  const set = new Set(occurrences);
  return set.size < occurrences.length ? false : true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
