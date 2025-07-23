/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
  const digitList = n
    .toString()
    .split("")
    .map((x) => +x);
  const digitSum = digitList.reduce((a, b) => a + b);
  const digitProduct = digitList.reduce((a, b) => a * b);

  return Number.isInteger(n / (digitSum + digitProduct));
};
