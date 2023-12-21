// https://leetcode.com/problems/merge-strings-alternately/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const n = word1.length > word2.length ? word1.length : word2.length;
  let res = "";
  for (let i = 0; i < n; i++) {
    if (word1[i]) res += word1[i];
    if (word2[i]) res += word2[i];
  }
  return res;
};

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));
