/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const a = {};

  arr.forEach((x) => (a[x] = a[x] ? a[x] + 1 : 1));

  for (const [key, value] of Object.entries(a)) {
    if (value > arr.length / 4) {
      return +key;
    }
  }
};
