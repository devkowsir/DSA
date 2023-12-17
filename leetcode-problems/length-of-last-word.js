// https://leetcode.com/problems/length-of-last-word
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let k = 0;
  let lastNonSpaceCharFound = false;
  for (let i = s.length - 1; i >= 0; i--) {
    if (lastNonSpaceCharFound) {
      if (s[i] === " ") return k;
      else k++;
    } else {
      if (s[i] === " ") continue;
      lastNonSpaceCharFound = true;
      k++;
    }
  }
  return k;
};
console.log(lengthOfLastWord("Hello Wolrd"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("l "));
