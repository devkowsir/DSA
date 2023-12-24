// https://leetcode.com/problems/sort-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const merge = (l, m, r) => {
    const l1 = m - l + 1,
      l2 = r - m,
      left = [],
      right = [];
    for (let i = 0; i < l1; i++) left.push(nums[l + i]);
    for (let j = 0; j < l2; j++) right.push(nums[m + 1 + j]);

    let i = 0,
      j = 0;
    while (i < l1 && j < l2) {
      if (left[i] > right[j]) nums[l + i + j] = left[i++];
      else nums[l + i + j] = right[j++];
    }
    while (i < l1) nums[l + i + j] = left[i++];
    while (j < l2) nums[l + i + j] = right[j++];
  };
  const lenght = nums.length;
  let width = 1;
  while (width < lenght) {
    let left = 0;
    while (left < lenght) {
      const mid = Math.min(left + width - 1, lenght - 1),
        right = Math.min(mid + width, lenght - 1);
      merge(left, mid, right);
      left += width * 2;
    }
    width *= 2;
  }
  return nums;
};

console.log(sortArray([5, 2, 3, 1]));
console.log(sortArray([5, 1, 1, 2, 0, 0]));
