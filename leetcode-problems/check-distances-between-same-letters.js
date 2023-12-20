// https://leetcode.com/problems/check-distances-between-same-letters
/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  for (let i = 0; i < s.length; i++) {
    const d = distance[s.charCodeAt(i) - 97];
    if (s[i - d - 1] !== s[i] && s[i + d + 1] !== s[i]) return false;
  }
  return true;
};

// console.log("a".charCodeAt(0), "a".charCodeAt(0)); => 97, 122
console.log(
  checkDistances(
    "abaccb",
    [
      1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
);
console.log(
  checkDistances(
    "aa",
    [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
);
