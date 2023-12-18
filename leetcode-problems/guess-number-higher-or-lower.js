// https://leetcode.com/problems/guess-number-higher-or-lower
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return	{number} -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 */
let picked;
var guess = (num) => (picked === num ? 0 : picked > num ? 1 : -1);

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1,
    right = n;

  while (right > left) {
    const mid = Math.floor((left + right) / 2);
    const guessRes = guess(mid);
    if (guessRes === 0) return mid;
    else if (guessRes < 0) right = mid;
    else left = mid + 1;
  }

  return right;
};

console.log((picked = 20), guessNumber(100));
