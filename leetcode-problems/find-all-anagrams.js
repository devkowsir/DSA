// https://leetcode.com/problems/find-all-anagrams-in-a-string/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length < p.length) return [];
  const sArr = new Array(26).fill(0),
    pArr = new Array(26).fill(0),
    res = [];

  const isTwoArrSame = (arr1, arr2) => {
    for (let i = 0; i < 26; i++) if (arr1[i] !== arr2[i]) return false;
    return true;
  };

  for (let i = 0; i < p.length; i++) {
    sArr[s.charCodeAt(i) - 97]++;
    pArr[p.charCodeAt(i) - 97]++;
  }

  if (isTwoArrSame(sArr, pArr)) res.push(0);

  let i = 0,
    j = p.length,
    wasLastOneAnagram = res.length > 0;

  while (j < s.length) {
    sArr[s.charCodeAt(i) - 97]--;
    sArr[s.charCodeAt(j) - 97]++;

    if (wasLastOneAnagram) {
      if (s[i] === s[j]) res.push(i + 1);
      else wasLastOneAnagram = false;
    } else {
      if (s[i] === s[j]) {
        i++, j++;
        continue;
      }
      if (isTwoArrSame(sArr, pArr)) {
        res.push(i + 1);
        wasLastOneAnagram = true;
      }
    }

    i++, j++;
  }

  return res;
};

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
console.log(findAnagrams("abcd", "cd"));
