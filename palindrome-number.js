/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let a = `${x}`;
  return x === +a.split("").reverse().join("");
};
