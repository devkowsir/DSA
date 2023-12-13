/**
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  const fac = [1];

  for (i = 1; i <= n; i++) {
    fac[i] = fac[i - 1] * i;
  }

  return fac[n];
}

console.log(factorial(4));
