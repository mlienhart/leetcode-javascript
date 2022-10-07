/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let a = new Set();
  let b = 1;

  for (const c of s) {
    if (a.has(c)) {
      a = new Set();
      b++;
    }
    a.add(c);
  }

  return b;
};
