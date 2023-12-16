// https://leetcode.com/problems/two-sum
/**
 *
 * @param {number[]} nums numbers array
 * @param {number} target
 * @returns {[number, number]} index of two positions
 */
function twoSum(nums, target) {
  let indiceA, indiceB;
  const hashTable = { [nums[0]]: 0 };
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (hashTable[target - num] !== undefined) {
      indiceA = hashTable[target - num];
      indiceB = i;
      if (indiceA === indiceB) continue;
      return [indiceA, indiceB];
    }
    hashTable[num] = i;
  }
  return [];
}

console.log([2, 7, 11, 15], 9);
console.log([3, 2, 4], 6);
console.log([3, 3], 6);
