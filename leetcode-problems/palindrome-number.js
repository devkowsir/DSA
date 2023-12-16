// https://leetcode.com/problems/palindrome-number
/**
 * @param {number} number
 * @return {boolean}
 */
function isPalindrome(number) {
  if (number < 0) return false;
  if (number < 10) return true;

  const string = number.toString();
  const halfLen = string.length / 2;

  for (let i = 0, j = string.length - 1; i < halfLen && j >= halfLen; i++, j--)
    if (string[i] !== string[j]) return false;

  return true;
}

console.log(121);
console.log(-121);
console.log(10);
