/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let a = s.split("");
  let b = [];
  let c = 0;

  for (let i = 0; i < a.length - 2; i++) {
    b.push(a[i] + a[i + 1] + a[i + 2]);
  }

  for (let i = 0; i < b.length; i++) {
    if ([...new Set(b[i].split(""))].length === 3) {
      c++;
    }
  }

  return c;
};
