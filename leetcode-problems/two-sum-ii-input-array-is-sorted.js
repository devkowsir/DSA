// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const n = numbers.length;
  for (let i = 0; i < n; i++) {
    const lookFor = target - numbers[i];
    let left = i + 1,
      right = n - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midVal = numbers[mid];
      if (midVal > lookFor) right = mid - 1;
      else if (midVal < lookFor) left = mid + 1;
      else return [i + 1, mid + 1];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
console.log(twoSum([3, 24, 50, 79, 88, 150, 345], 200));
