// https://leetcode.com/problems/sqrtx/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0,
    right = x,
    mid,
    square,
    res = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    square = mid * mid;
    if (square > x) {
      right = mid - 1;
    } else if (square < x) {
      res = mid;
      left = mid + 1;
    } else return mid;
  }
  return res;
};

console.log(mySqrt(0));
console.log(mySqrt(1));
console.log(mySqrt(2));
console.log(mySqrt(3));
console.log(mySqrt(4));
console.log(mySqrt(5));
console.log(mySqrt(6));
console.log(mySqrt(7));
console.log(mySqrt(8));
console.log(mySqrt(9));
