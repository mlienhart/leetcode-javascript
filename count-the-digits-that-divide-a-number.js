/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  return num
    .toString()
    .split("")
    .filter((x) => num % +x === 0).length;
};
