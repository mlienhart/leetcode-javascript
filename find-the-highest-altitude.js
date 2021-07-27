/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let a = [0];

  for (let i = 0; i < gain.length; i++) {
    a.push(a[i] + gain[i]);
  }

  return Math.max(...a);
};
