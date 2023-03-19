/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let firstValue = x.toString(2);
  let secondValue = y.toString(2);
  let result = 0;

  if (firstValue.length < secondValue.length) {
    firstValue = firstValue.padStart(secondValue.length, "0");
  }

  if (firstValue.length > secondValue.length) {
    secondValue = secondValue.padStart(firstValue.length, "0");
  }

  for (let i = 0; i < firstValue.length; i++) {
    if (firstValue[i] !== secondValue[i]) {
      result++;
    }
  }

  return result;
};
