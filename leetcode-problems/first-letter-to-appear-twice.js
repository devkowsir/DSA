// https://leetcode.com/problems/first-letter-to-appear-twice
/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const firstCounterd = {};
  for (let i = 0; i < s.length; i++) {
    if (firstCounterd[s[i]]) return s[i];
    else firstCounterd[s[i]] = true;
  }
};

console.log(repeatedCharacter("abccbaacz"));
console.log(repeatedCharacter("abcdd"));
