// https://leetcode.com/problems/valid-palindrome-ii/
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const util = (i, j) => {
    while (i < j) {
      if (s[i] !== s[j]) return false;
      i++, j--;
    }
    return true;
  };
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) left++, right--;
    else return util(left + 1, right) || util(left, right - 1);
  }
  return true;
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("deeee"));
console.log(validPalindrome("abc"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("cupuxupucu"));
console.log(validPalindrome("acxcybycxcxa"));
console.log(validPalindrome("aeacdeaeaaaaaaeaedcae"));

// if (hasChangeAbility) {
//   if (right - left === 1) return true;
//   if (s[left + 1] === s[right] && s[left + 2] === s[right - 1]) left++;
//   else if (s[left] === s[right - 1] && s[left + 1] === s[right - 2])
//     right--;
//   else return false;
//   hasChangeAbility = false;
// } else return false;
