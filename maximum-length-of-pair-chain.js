/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  pairs.sort((a, b) => (a[1] < b[1] ? -1 : 1));

  let a = 0;
  let b = -1000;

  for (let [x, y] of pairs) {
    if (x > b) {
      b = y;
      a++;
    }
  }

  return a;
};
