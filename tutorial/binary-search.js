/**
 * @param {number[]} nums
 * @param {number} t
 * @returns {number}
 */
function binarySearch(nums, t) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < t) right = mid;
    else if (nums[mid] > t) left = mid + 1;
    else return mid;
  }
  return -1;
}

console.log(binarySearch([1, 5, 10, 16, 21], 10));
