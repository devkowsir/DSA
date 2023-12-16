// https://leetcode.com/problems/roman-to-integer
/**
 * @param {string} roman
 * @return {number}
 */
var romanToInt = function (roman) {
  const symbolValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let value = 0;
  for (let i = 0; i < roman.length; i++) {
    const currAndNextSymbol = roman[i] + roman[i + 1];
    switch (currAndNextSymbol) {
      case "IV":
        value += 4;
        i++;
        continue;

      case "IX":
        value += 9;
        i++;
        continue;

      case "XL":
        value += 40;
        i++;
        continue;

      case "XC":
        value += 90;
        i++;
        continue;

      case "CD":
        value += 400;
        i++;
        continue;

      case "CM":
        value += 900;
        i++;
        continue;

      default:
        value += symbolValues[roman[i]];
    }
  }
  return value;
};

console.log(romanToInt("MCMXCIV"));
