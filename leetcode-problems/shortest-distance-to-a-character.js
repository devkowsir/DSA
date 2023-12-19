// https://leetcode.com/problems/shortest-distance-to-a-character
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const indexesOfC = []; // [ 3, 5, 6, 11 ]
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) indexesOfC.push(i);
  }
  const noOfCheckPoints = indexesOfC.length;
  const res = [];
  for (let i = 0, j = 0; i < s.length; i++) {
    if (j === 0) {
      const firstPosOfC = indexesOfC[j];
      if (i < firstPosOfC) res[i] = firstPosOfC - i;
      else {
        res[i] = 0;
        j++;
      }
    } else if (j === noOfCheckPoints) {
      res[i] = i - indexesOfC[j - 1];
    } else {
      if (i === indexesOfC[j]) {
        res[i] = 0;
        j++;
      } else {
        const leftDistance = i - indexesOfC[j - 1];
        const rightDistance = indexesOfC[j] - i;
        res[i] = Math.min(leftDistance, rightDistance);
      }
    }
  }
  return res;
};

console.log(shortestToChar("loveleetcode", "e"));
console.log(shortestToChar("aaba", "b"));
