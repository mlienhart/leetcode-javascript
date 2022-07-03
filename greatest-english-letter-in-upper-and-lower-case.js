/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let a = s.split("");
  let b = [];
  let c = [];

  for (let i = 0; i < a.length; i++) {
    b.push({ a: a[i].toLowerCase(), b: a[i] });
  }

  b.sort((a, b) => (a.a < b.a ? 1 : -1));

  for (let i = 0; i < b.length; i++) {
    if (b[i]?.a === b[i + 1]?.a && b[i]?.b !== b[i + 1]?.b) {
      c.push(b[i]);
    }
  }

  return c.length
    ? c.sort((a, b) => (a.a < b.a ? 1 : -1))[0].a.toUpperCase()
    : "";
};
