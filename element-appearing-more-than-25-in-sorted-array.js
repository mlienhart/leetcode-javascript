/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const result = {};

  arr.forEach((x) => (result[x] = result[x] ? result[x] + 1 : 1));

  for (const [key, value] of Object.entries(result)) {
    if (value > arr.length / 4) {
      return +key;
    }
  }
};
