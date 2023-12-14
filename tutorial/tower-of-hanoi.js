/**
 * Tower of hanoi
 * @param {number} n number of disks
 * @param {"A" | "B" | "C"} fromRod
 * @param {"A" | "B" | "C"} toRod
 * @param {"A" | "B" | "C"} usingRod
 * @returns {string} steps to follow
 */
function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

console.log(towerOfHanoi(1, "A", "B", "C"));
console.log(towerOfHanoi(2, "A", "B", "C"));
console.log(towerOfHanoi(3, "A", "B", "C"));
console.log(towerOfHanoi(4, "A", "B", "C"));
console.log(towerOfHanoi(5, "A", "B", "C"));
console.log(towerOfHanoi(6, "A", "B", "C"));
