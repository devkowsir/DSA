// https://leetcode.com/problems/valid-parentheses
/**
 * @param {string} string
 * @return {boolean}
 */
var isValid = function (string) {
  const closingBracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const openingBracketStack = [];

  for (let i = 0; i < string.length; i++) {
    const bracket = string[i];
    switch (bracket) {
      case "(":
        openingBracketStack.push(bracket);
        break;
      case "{":
        openingBracketStack.push(bracket);
        break;
      case "[":
        openingBracketStack.push(bracket);
        break;
      default:
        if (
          closingBracketMap[
            openingBracketStack[openingBracketStack.length - 1]
          ] !== bracket
        )
          return false;
        else openingBracketStack.pop();
    }
  }
  if (openingBracketStack.length) return false;
  return true;
};

console.log(isValid("()"));
console.log(isValid("[](){}"));
console.log(isValid("[{()}]"));
console.log(isValid("[(}]"));
console.log(isValid("["));
