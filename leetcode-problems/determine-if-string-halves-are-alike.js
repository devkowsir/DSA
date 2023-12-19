// https://leetcode.com/problems/determine-if-string-halves-are-alike
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let left = 0,
    right = s.length - 1,
    leftVowels = 0,
    rightVowels = 0;
  while (right > left) {
    if (vowels.includes(s[left])) leftVowels++;
    if (vowels.includes(s[right])) rightVowels++;
    left++;
    right--;
  }
  return leftVowels === rightVowels;
};
