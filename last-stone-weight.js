/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => (a > b ? 1 : -1));
    let a = stones.pop();
    let b = stones.pop();

    if (a !== b) {
      stones.push(Math.abs(a - b));
    }
  }

  return stones[0] ?? 0;
};
