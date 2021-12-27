/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  let a = `${num}`;
  let b = a.split("").reverse().join("");
  let c = (+b).toString().split("").reverse().join("");

  return a === c;
};
