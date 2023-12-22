// https://leetcode.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  strs.forEach((str) => {
    const sortedStr = str.split("").sort().join("");
    const oldStrs = map.get(sortedStr) || [];
    oldStrs.push(str);
    map.set(sortedStr, oldStrs);
  });
  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["fin", "ell", "coy", "coy", "zip"]));
