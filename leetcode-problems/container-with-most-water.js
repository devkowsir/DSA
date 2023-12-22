// https://leetcode.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1,
    maxArea = 0;
  while (left < right) {
    const areaHeight = Math.min(height[left], height[right]);
    const areaWidth = right - left;
    const currArea = areaHeight * areaWidth;
    if (currArea > maxArea) maxArea = currArea;
    if (height[left] < height[right]) left++;
    else if (height[left] > height[right]) right--;
    else left++, right--;
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 7, 6, 2, 5, 4, 8, 3]));
console.log(maxArea([1, 10, 1]));
console.log(maxArea([1, 10, 3]));
console.log(maxArea([3, 10, 1]));
console.log(maxArea([0, 2]));
