// https://leetcode.com/problems/3sum/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const n = nums.length,
    res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1,
      k = n - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 1, 1]));
// console.log(threeSum([0, 0, 0]));
// console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
