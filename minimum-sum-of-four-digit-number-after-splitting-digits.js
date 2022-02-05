/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  let a = `${num}`.split("").sort((a, b) => a - b);
  return +(a[0] + a[2]) + +(a[1] + +a[3]);
};
