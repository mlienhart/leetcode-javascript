/**
 * @param {number[]} rolls
 * @param {number} k
 * @return {number}
 */
var shortestSequence = function (rolls, k) {
  let a = new Set();
  let b = 1;

  for (const c of rolls) {
    a.add(c);
    if (a.size === k) {
      b++;
      a = new Set();
    }
  }

  return b;
};
