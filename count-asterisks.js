/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let a = s.split("|");
  let b = 0;

  for (let i = 0; i < a.length; i = i + 2) {
    let c = a[i].split("").filter((x) => x === "*");
    if (c.length > 0) {
      b = b + c.length;
    }
  }

  return b;
};
