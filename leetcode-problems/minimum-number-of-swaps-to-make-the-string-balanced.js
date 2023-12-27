// https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/

/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let openings = 0,
    closings = 0,
    swaps = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") closings++;
    else openings++;
    if (closings > openings) closings--, openings++, swaps++;
  }

  return swaps;
};

console.log(minSwaps("][]["));
console.log(minSwaps("]]][[["));
console.log(minSwaps("[]"));
