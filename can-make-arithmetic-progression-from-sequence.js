/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => (a > b ? 1 : -1));

  let a = arr[1] - arr[0];
  let b = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === a) {
      b++;
    }
  }

  return b === arr.length - 1;
};
