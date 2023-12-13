/**
 * @param {number[]} nums
 * @param {number} t
 * @returns {number}
 */
function linearSearch(nums, t) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === t) return i;
  }
  return -1;
}

console.log(linearSearch([1, 5, 10, 23, 11], 12));
