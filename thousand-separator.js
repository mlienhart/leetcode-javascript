/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  let a = `${n}`.split("").reverse().join("");
  let b = [];

  for (let i = 0; i < a.length; i++) {
    if (i % 3 === 0 && i > 0) {
      b.push(".");
    }
    b.push(a[i]);
  }

  return b.reverse().join("");
};
