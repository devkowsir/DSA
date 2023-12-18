// https://leetcode.com/problems/add-strings
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let carry = false,
    res = "";
  const l1 = num1.length;
  const l2 = num2.length;
  for (let i = l1 - 1, j = l2 - 1; i >= 0 || j >= 0 || carry; i--, j--) {
    let tempSum = 0;

    if (i >= 0) tempSum += +num1[i];
    if (j >= 0) tempSum += +num2[j];
    if (carry) tempSum += 1;
    carry = tempSum > 9;
    res = `${carry ? tempSum % 10 : tempSum}${res}`;
  }
  return res;
};

console.log(addStrings("456", "77"));
console.log(addStrings("111", "99"));
console.log(addStrings("0", "0"));
