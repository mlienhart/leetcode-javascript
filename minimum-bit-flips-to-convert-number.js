/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  let a = start.toString(2);
  let b = goal.toString(2);
  let c = 0;

  if (a.length > b.length) {
    b = b.padStart(a.length, "0");
  }

  if (a.length < b.length) {
    a = a.padStart(b.length, "0");
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      c++;
    }
  }

  return c;
};
