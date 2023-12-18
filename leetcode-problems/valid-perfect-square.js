// https://leetcode.com/problems/valid-perfect-square
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) return true;
  let left = 1,
    right = num;

  while (right > left) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;
    if (square === num) return true;
    else if (square > num) right = mid;
    else left = mid + 1;
  }
  return false;
};

console.log(isPerfectSquare(1));
console.log(isPerfectSquare(2));
console.log(isPerfectSquare(3));
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(5));
