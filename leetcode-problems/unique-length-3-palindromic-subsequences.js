// https://leetcode.com/problems/unique-length-3-palindromic-subsequences/
/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const prev = map.get(s[i]);
    if (prev) prev[1] = i;
    else map.set(s[i], [i]);
  }
  let count = 0;
  for (const [first, last] of map.values()) {
    if (!last) continue;
    const charArray = {};
    let uniqueCharCount = 0;
    for (let i = first + 1; i < last; i++) {
      if (charArray[s[i]]) continue;
      charArray[s[i]] = true;
      uniqueCharCount++;
      if (uniqueCharCount === 26) break;
    }
    count += uniqueCharCount;
  }
  return count;
};

console.log(countPalindromicSubsequence("aabca"));
console.log(countPalindromicSubsequence("adc"));
console.log(countPalindromicSubsequence("bbcbaba"));
