// https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function (rectangles) {
  let interchangeableRectanglesCount = 0;
  const ratioCount = new Map();
  for (const [width, height] of rectangles) {
    const ratio = (width / height).toFixed(5);
    const count = ratioCount.get(ratio);
    if (!count) {
      ratioCount.set(ratio, 1);
      continue;
    }
    interchangeableRectanglesCount += count;
    ratioCount.set(ratio, count + 1);
  }
  return interchangeableRectanglesCount;
};

console.log(
  interchangeableRectangles([
    [4, 8],
    [3, 6],
    [10, 20],
    [15, 30],
  ])
);
console.log(
  interchangeableRectangles([
    [4, 5],
    [7, 8],
  ])
);
