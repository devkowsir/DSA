/**
 * @param {number[]} numbers array of numbers
 * @returns {number} greatest common divisor of given array.
 */
function GCD(numbers) {
  const gcdOfTwo = (a, b) => {
    if (a === 0) return b;
    return gcdOfTwo(b % a, a);
  };

  let gcd = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    gcd = gcdOfTwo(gcd, numbers[i]);
  }

  return gcd;
}

console.log([1, 4, 6]);
console.log([20, 30]);
