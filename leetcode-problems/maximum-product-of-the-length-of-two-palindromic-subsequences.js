// https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/
/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function (s) {
  const isPalindrom = (str) => {
    const n = str.length;
    for (let i = 0; i < n / 2; i++) if (str[i] !== str[n - i - 1]) return false;
    return true;
  };
  const map = new Map(),
    n = s.length;
  for (let mask = 1; mask < 1 << n; mask++) {
    let subsequence = "";
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) subsequence += s[i];
    }
    if (isPalindrom(subsequence)) map.set(mask, subsequence.length);
  }
  let res = 0;
  const masks = [...map.keys()];
  for (const m1 of masks) {
    for (const m2 of masks) {
      if ((m1 & m2) == 0) res = Math.max(res, map.get(m1) * map.get(m2));
    }
  }
  return res;
};

console.log(maxProduct("aa"));
console.log(maxProduct("abc"));
console.log(maxProduct("abcba"));
console.log(maxProduct("leetcodecom"));
console.log(maxProduct("accbcaxxcxx"));
