/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  const a = {};

  for (const b of nums) {
    a[b] = a[b] ? a[b] + 1 : 1;
  }

  const c = Object.entries(a).sort((a, b) => b[1] - a[1]);
  const d = +c.find((x) => x[0] % 2 === 0)?.[0];

  return d || d === 0 ? d : -1;
};
