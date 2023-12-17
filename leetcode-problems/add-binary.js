// https://leetcode.com/problems/add-binary
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// additionCases object keys represent the probable cases when adding two bit
// with carry bit and values represent the sum result for each case where
// results 0th index is carry and 1st index is actual result.
// prettier-ignore
const additionCases = {
  "111": "11",
  "101": "10",
  "011": "10",
  "001": "01",
  "110": "10",
  "100": "01",
  "010": "01",
  "000": "00",
}

var addBinary = function (a, b) {
  let sum = "";
  let i = a.length - 1,
    j = b.length - 1,
    carry = "0";

  while (i >= 0 || j >= 0) {
    const res = additionCases[(a[i] || "0") + (b[j] || "0") + carry];
    sum = res[1] + sum;
    carry = res[0];
    i--;
    j--;
  }
  if (carry === "1") sum = carry + sum;
  return sum;
};

console.log(addBinary("11", "10"));
console.log(addBinary("1010", "1011"));
