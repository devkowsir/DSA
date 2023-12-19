// https://leetcode.com/problems/squares-of-a-sorted-array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const res = [];
  let n = nums.length;
  for (let i = 0, j = n - 1; i <= j; ) {
    const lSquare = nums[i] * nums[i],
      rSquare = nums[j] * nums[j];

    if (rSquare > lSquare) {
      res[j - i] = rSquare;
      j--;
    } else {
      res[j - i] = lSquare;
      i++;
    }
  }
  return res;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
