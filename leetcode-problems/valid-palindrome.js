// https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // number codes = 48-57, lowercase codes = 65-90, uppercase codes = 97-122
  const isNonAlphaNumeric = (charCode) =>
    charCode < 48 ||
    (charCode > 57 && charCode < 65) ||
    (charCode > 90 && charCode < 97) ||
    charCode > 122;
  const n = s.length;
  for (let i = 0, j = n - 1; i < j; ) {
    const leftChar = s[i],
      leftCharCode = s.charCodeAt(i);
    const rightChar = s[j],
      rightCharCode = s.charCodeAt(j);
    if (isNonAlphaNumeric(leftCharCode)) {
      i++;
      continue;
    }
    if (isNonAlphaNumeric(rightCharCode)) {
      j--;
      continue;
    }
    if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
