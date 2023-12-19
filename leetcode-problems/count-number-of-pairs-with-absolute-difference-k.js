// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  let pairs = 0;
  const repeatCounts = {};

  nums.forEach((num) => {
    repeatCounts[num] =
      repeatCounts[num] == undefined ? 1 : repeatCounts[num] + 1;
  });

  nums.forEach((num) => {
    if (repeatCounts[num + k]) pairs += repeatCounts[num + k];
    if (repeatCounts[num - k]) pairs += repeatCounts[num - k];
  });

  return pairs / 2;
};

console.log(countKDifference([1, 2, 2, 2, 1], 1));
console.log(countKDifference([1, 3], 3));
console.log(countKDifference([3, 2, 1, 5, 4], 2));
