/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  const difference = arr[1] - arr[0];
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === difference) {
      result++;
    }
  }

  return result === arr.length - 1;
};
