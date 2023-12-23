// https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  const mod = 1000000007,
    powerOfTwo = [],
    n = nums.length;
  let num = 1;
  for (let i = 0; i < n; i++) {
    powerOfTwo.push(num);
    num = (num * 2) % mod;
  }
  nums.sort((a, b) => a - b);
  let count = 0,
    j = n - 1;
  for (let i = 0; i < n && nums[i] * 2 <= target; i++) {
    while (j && nums[j] + nums[i] > target) j--;
    count = (count + powerOfTwo[j - i]) % mod;
  }
  return count;
};

console.log(numSubseq([3, 5, 6, 7], 9));
console.log(numSubseq([3, 3, 6, 8], 10));
console.log(numSubseq([2, 3, 3, 4, 6, 7], 12)); // 61
console.log(
  numSubseq(
    [
      14, 4, 6, 6, 20, 8, 5, 6, 8, 12, 6, 10, 14, 9, 17, 16, 9, 7, 14, 11, 14,
      15, 13, 11, 10, 18, 13, 17, 17, 14, 17, 7, 9, 5, 10, 13, 8, 5, 18, 20, 7,
      5, 5, 15, 19, 14,
    ],
    22
  )
); // 272187084
