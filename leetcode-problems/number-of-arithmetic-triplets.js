// https://leetcode.com/problems/number-of-arithmetic-triplets
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  for (let j = 1; j < nums.length - 1; j++) {
    const mid = nums[j];
    let left, right;
    for (let i = j - 1; i >= 0 && j - i <= diff; i--) {
      if (nums[i] === mid - diff) {
        left = nums[i];
        break;
      }
    }
    if (left === undefined) continue;
    for (let k = j + 1; k < nums.length && k - j <= diff; k++) {
      if (nums[k] === mid + diff) {
        right = nums[k];
        break;
      }
    }
    if (right === undefined) continue;
    count++;
  }
  return count;
};

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2));
console.log(
  arithmeticTriplets(
    [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 92, 93,
      94, 95, 96, 97, 98, 99, 100,
    ],
    10
  )
);
