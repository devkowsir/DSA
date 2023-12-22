// https://leetcode.com/problems/4sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const res = [],
    n = nums.length;

  for (let a = 0; a < n - 3; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    for (let b = a + 1; b < n - 2; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;

      const newTarget = target - nums[a] - nums[b];
      let c = b + 1,
        d = n - 1;

      while (c < d) {
        const currSum = nums[c] + nums[d];
        if (currSum < newTarget) c++;
        else if (currSum > newTarget) d--;
        else {
          res.push([nums[a], nums[b], nums[c], nums[d]]);
          while (c < d && nums[c] === nums[c + 1]) c++;
          while (c < d && nums[d] === nums[d - 1]) d--;
          c++;
          d--;
        }
      }
    }
  }

  return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
