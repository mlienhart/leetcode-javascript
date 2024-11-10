/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  const binaryNumber = n.toString(2);

  for (let i = 0; i < binaryNumber.length - 1; i++) {
    if (binaryNumber[i] === binaryNumber[i + 1]) {
      return false;
    }
  }

  return true;
};
