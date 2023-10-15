/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  const result = `${num}`.split("").sort((a, b) => a - b);

  return +(result[0] + result[2]) + +(result[1] + +result[3]);
};
