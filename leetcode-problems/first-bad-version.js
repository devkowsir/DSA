// https://leetcode.com/problems/first-bad-version
var n = 6;
var bad = Math.ceil(Math.random() * 5);
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
var isBadVersion = (version) => (version < bad ? false : true);

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let first = 1,
      last = n;

    while (last > first) {
      const mid = Math.floor((first + last) / 2);
      if (isBadVersion(mid)) last = mid;
      else first = mid + 1;
    }

    return last;
  };
};

console.log(n, bad, solution(isBadVersion)(n));
