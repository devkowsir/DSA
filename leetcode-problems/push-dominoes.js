// https://leetcode.com/problems/push-dominoes
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const l = dominoes.length;
  const pushIndexes = [];
  let res = Array.from(dominoes);

  for (let i = l - 1; i >= 0; i--) if (dominoes[i] !== ".") pushIndexes.push(i);

  let currInd = pushIndexes.pop();
  let currSt = dominoes[currInd];

  if (currSt === "L") for (let i = 0; i < currInd; i++) res[i] = "L";

  while (pushIndexes.length) {
    const nextInd = pushIndexes.pop();
    const nextSt = dominoes[nextInd];

    switch (currSt + nextSt) {
      case "RL":
        const diff = (nextInd - currInd) / 2;
        for (let i = 0; i < diff; i++) {
          res[currInd + i] = "R";
          res[nextInd - i] = "L";
        }
        break;

      case "RR":
        for (let i = currInd + 1; i < nextInd; i++) res[i] = "R";
        break;

      case "LL":
        for (let i = currInd + 1; i < nextInd; i++) res[i] = "L";
        break;
    }

    currInd = nextInd;
    currSt = nextSt;
  }

  if (currSt == "R") for (let i = currInd; i < l; i++) res[i] = "R";

  return res.join("");
};

console.log(pushDominoes("RR.L"));
console.log(pushDominoes("LL.RR.LLRRLL.."));
console.log(pushDominoes("..R...L.."));
console.log(pushDominoes("..R....L.."));
console.log(pushDominoes("..L...R.."));
console.log(pushDominoes("..L....R.."));
console.log(pushDominoes("..R....R.."));
console.log(pushDominoes("..L....L.."));
