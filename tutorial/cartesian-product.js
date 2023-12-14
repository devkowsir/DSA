/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[][]}
 */
function cartesianProduct(nums1, nums2) {
  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      res.push([nums1[i], nums2[j]]);
    }
  }
  return res;
}

console.log(cartesianProduct([1, 2], [3, 4]));
