/**
 * @param {number[]} rolls
 * @param {number} k
 * @return {number}
 */
var shortestSequence = function (rolls, k) {
  const set = new Set();
  let result = 1;

  for (const roll of rolls) {
    set.add(roll);
    if (set.size === k) {
      result++;
      set = new Set();
    }
  }

  return result;
};
