// https://leetcode.com/problems/brick-wall/
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const brickEdgeCountAtEachLength = new Map();
  for (let i = 0; i < wall.length; i++) {
    for (let j = 0; j < wall[i].length - 1; j++) {
      const brickEdgeAt = wall[i][j] + (wall[i][j - 1] || 0);
      wall[i][j] = brickEdgeAt;
      const prev = brickEdgeCountAtEachLength.get(brickEdgeAt);
      if (prev >= 0) brickEdgeCountAtEachLength.set(brickEdgeAt, prev + 1);
      else brickEdgeCountAtEachLength.set(brickEdgeAt, 1);
    }
  }
  if (!brickEdgeCountAtEachLength.size) return wall.length;
  return wall.length - Math.max(...brickEdgeCountAtEachLength.values());
};

console.log(
  leastBricks([
    [1, 2, 2, 1],
    [3, 1, 2],
    [1, 3, 2],
    [2, 4],
    [3, 1, 2],
    [1, 3, 1, 1],
  ])
);
console.log(leastBricks([[1], [1], [1]]));
