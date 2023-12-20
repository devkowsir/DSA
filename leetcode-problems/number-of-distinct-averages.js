// https://leetcode.com/problems/number-of-distinct-averages
/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  const mergeSort = (arr) => {
    const merge = (left, right) => {
      let i = 0,
        j = 0;
      const temp = [],
        leftLen = left.length,
        rightLen = right.length;
      while (i < leftLen && j < rightLen) {
        if (left[i] > right[j]) temp.push(right[j++]);
        else temp.push(left[i++]);
      }
      return [...temp, ...left.slice(i), ...right.slice(j)];
    };
    const split = (numbers) => {
      if (numbers.length <= 1) return numbers;

      const mid = Math.floor(numbers.length / 2);
      const left = numbers.slice(0, mid);
      const right = numbers.slice(mid);

      return merge(split(left), split(right));
    };
    return split(arr);
  };
  nums = mergeSort(nums);
  const distinct = new Set();
  let i = 0,
    j = nums.length - 1;
  while (i < j) {
    distinct.add((nums[i++] + nums[j--]) / 2);
  }
  return distinct.size;
};

console.log(distinctAverages([4, 1, 4, 0, 3, 5]));
console.log(distinctAverages([1, 100]));
