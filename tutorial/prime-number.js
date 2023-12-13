/**
 * @param {number} n
 * @returns {boolean}
 */
function primeNumber(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(primeNumber(5));
console.log(primeNumber(6));
console.log(primeNumber(7));
