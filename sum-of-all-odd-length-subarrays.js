/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  const result = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr.slice(i, j).length % 2 !== 0) {
        result.push(arr.slice(i, j).reduce((a, b) => a + b));
      }
    }
  }

  return result.reduce((a, b) => a + b);
};
