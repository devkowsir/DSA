// https://leetcode.com/problems/rotate-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;

  if (n === 1 || n === k) return nums;
  k = k % n;

  const reverse = (start, end) => {
    let temp;
    while (start < end) {
      temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++, end--;
    }
  };

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
console.log(rotate([1, 2, 3], 4));
