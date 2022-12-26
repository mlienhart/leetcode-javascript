/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  return (
    num.toString() ===
    (+num.toString().split("").reverse().join(""))
      .toString()
      .split("")
      .reverse()
      .join("")
  );
};
