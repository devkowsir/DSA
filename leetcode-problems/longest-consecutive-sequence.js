// https://leetcode.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0;
  let set = new Set(nums);
  let max = 1;
  for (let num of set) {
    if (!set.has(num - 1)) {
      let sequence = 1;
      while (set.has(num + sequence)) {
        sequence++;
      }
      if (sequence > max) max = sequence;
    }
  }
  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([0]));
console.log(longestConsecutive([]));
