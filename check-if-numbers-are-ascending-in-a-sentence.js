/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  const numbers = s
    .split(" ")
    .filter((x) => !isNaN(x))
    .map((x) => +x);

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= numbers[i + 1]) {
      return false;
    }
  }

  return true;
};
