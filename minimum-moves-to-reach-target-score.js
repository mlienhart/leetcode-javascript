/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function (target, maxDoubles) {
  if (maxDoubles === 0) {
    return target - 1;
  }

  let result = 0;

  while (target > 1) {
    if (target % 2 === 0 && maxDoubles > 0) {
      target /= 2;
      maxDoubles--;
      result++;
    } else {
      target--;
      result++;
    }
  }

  return result;
};
