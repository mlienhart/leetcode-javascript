/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  let a = arr.length * 0.05;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < a; i++) {
    arr.shift();
    arr.pop();
  }

  let b = arr.reduce((a, b) => a + b, 0) / arr.length;

  return parseFloat(b.toFixed(5));
};
