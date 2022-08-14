/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let a = {};
  let b = [0, 0];

  for (const c of nums) {
    a[c] = a[c] ? a[c] + 1 : 1;
  }

  for (const d of Object.entries(a)) {
    d[1] % 2 === 0
      ? (b[0] = b[0] + d[1] / 2)
      : ((b[0] = b[0] + Math.floor(d[1] / 2)), (b[1] = b[1] + 1));
  }

  return b;
};
