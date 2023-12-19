// https://leetcode.com/problems/add-to-array-form-of-integer
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let carry = false,
    i = num.length - 1,
    pre = [],
    post = [];
  while (i >= 0 || k || carry) {
    let temp = 0;
    if (num[i]) temp += num[i];
    if (k) {
      temp += k % 10;
      k = Math.trunc(k / 10);
    }
    if (carry) temp += 1;
    carry = temp > 9;
    const res = carry ? temp % 10 : temp;
    if (i >= 0) post[i] = res;
    else pre.push(res);
    i--;
  }
  return pre.reverse().concat(post);
};

// console.log(addToArrayForm([1, 2, 0, 0], 34));
// console.log(addToArrayForm([2, 7, 4], 181));
// console.log(addToArrayForm([2, 1, 5], 806));
console.log(addToArrayForm([0], 23));
