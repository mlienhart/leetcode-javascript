/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let a = x.toString(2);
  let b = y.toString(2);
  let c = 0;

  if (a.length < b.length) {
    a = a.padStart(b.length, "0");
  } else {
    b = b.padStart(a.length, "0");
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      c++;
    }
  }

  return c;
};
