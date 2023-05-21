/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    const lastStone = stones.pop();
    const penultimateStone = stones.pop();

    if (lastStone !== penultimateStone) {
      stones.push(Math.abs(lastStone - penultimateStone));
    }
  }

  return stones[0] ?? 0;
};
