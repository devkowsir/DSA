// https://leetcode.com/problems/grid-game/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  const topRow = grid[0],
    bottomRow = grid[1],
    n = topRow.length;
  if (n == 1) return 0;
  for (let i = 1; i < n; i++) {
    topRow[n - i - 1] = topRow[n - i] + topRow[n - i - 1];
    bottomRow[i] = bottomRow[i - 1] + bottomRow[i];
  }
  let res = Infinity;
  for (let i = 0; i < n; i++) {
    let max;
    if (i === 0) max = topRow[i + 1];
    else if (i === n - 1) max = bottomRow[i - 1];
    else max = Math.max(topRow[i + 1], bottomRow[i - 1]);
    res = Math.min(res, max);
  }
  return res;
};

console.log(
  gridGame([
    [2, 5, 4],
    [1, 5, 1],
  ])
);
console.log(
  gridGame([
    [3, 3, 1],
    [8, 5, 2],
  ])
);
console.log(
  gridGame([
    [1, 3, 1, 15],
    [1, 3, 3, 1],
  ])
);
console.log(
  gridGame([
    [20, 3, 20, 17, 2, 12, 15, 17, 4, 15],
    [20, 10, 13, 14, 15, 5, 2, 3, 14, 3],
  ])
);
console.log(gridGame([[1], [2]]));
