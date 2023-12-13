/**
 * @param {number[]} nums
 * @param {number} t
 * @returns {number}
 */
function binarySearch(nums, t) {
  const searchBetween = (leftIndex, rightIndex) => {
    if (leftIndex === rightIndex && nums[leftIndex] !== t) return -1;
    const mid = Math.floor((leftIndex + rightIndex) / 2);
    if (nums[mid] > t) return searchBetween(leftIndex, mid);
    else if (nums[mid] < t) return searchBetween(mid + 1, rightIndex);
    else return mid;
  };

  return searchBetween(0, nums.length - 1);
}

console.log(binarySearch([1, 5, 10, 16, 21], 1));
console.log(binarySearch([1, 5, 10, 16, 21], 11));
console.log(binarySearch([1, 5, 10, 16, 21], 21));
