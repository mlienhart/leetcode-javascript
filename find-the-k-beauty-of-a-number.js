/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let result = 0;
  const numberAsString = num.toString();

  for (let i = 0; i < numberAsString.length; i++) {
    if (
      num % +numberAsString.slice(i, i + k) === 0 &&
      numberAsString.slice(i, i + k).length === k
    ) {
      result++;
    }
  }

  return result;
};
