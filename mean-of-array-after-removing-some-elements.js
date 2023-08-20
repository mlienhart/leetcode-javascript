/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  let result = arr.length * 0.05;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < result; i++) {
    arr.shift();
    arr.pop();
  }

  return parseFloat(arr.reduce((a, b) => a + b, 0) / arr.length.toFixed(5));
};
