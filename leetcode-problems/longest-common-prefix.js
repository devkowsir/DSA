// https://leetcode.com/problems/longest-common-prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let lcp = "";
  for (let i = 0; i < strs[0].length; i++) {
    let breakFlag = false;
    const char = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        breakFlag = true;
        break;
      }
    }
    if (breakFlag) break;
    lcp += char;
  }
  return lcp;
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
