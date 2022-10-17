/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function (num) {
  if (num === 0) {
    return true;
  }

  for (let i = 0; i < num; i++) {
    let a = +i.toString().split("").reverse().join("");
    if (i + a === num) {
      return true;
    }
  }

  return false;
};
