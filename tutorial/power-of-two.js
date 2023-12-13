/**
 * @param {number} n
 * @returns {boolean}
 */
function powerOfTwo(n) {
  while (n > 1) {
    if (n % 2 === 0) n = Math.floor(n / 2);
    else if (n % 2 === 1) return false;
  }
  return true;
}

console.log(powerOfTwo(4));
console.log(powerOfTwo(5));
console.log(powerOfTwo(6));
console.log(powerOfTwo(7));
console.log(powerOfTwo(8));
