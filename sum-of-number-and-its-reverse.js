/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function (num) {
  if (num === 0) {
    return true;
  }

  for (let i = 0; i < num; i++) {
    if (i + +i.toString().split("").reverse().join("") === num) {
      return true;
    }
  }

  return false;
};
