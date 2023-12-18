// https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1);
    else map.set(s[i], 1);
  }
  for (let i = 0; i < t.length; i++) {
    const rem = map.get(t[i]);
    if (rem === undefined) return false;
    else if (rem === 1) map.delete(t[i]);
    else map.set(t[i], rem - 1);
  }
  console.log(map, map.size);
  return map.size === 0;
};

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));
// console.log(isAnagram("keen", "keen"));
console.log(isAnagram("aacc", "ccac"));
