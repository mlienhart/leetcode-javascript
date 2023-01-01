/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  return num
    .toString()
    .split("")
    .map((x) => +x)
    .filter((x) => num % x === 0).length;
};
