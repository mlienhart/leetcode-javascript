/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let a = [];

  for (let i = 0; i < indices.length; i++) {
    a.push({ a: indices[i], b: s[i] });
  }

  return a
    .sort((a, b) => (a.a < b.a ? -1 : 1))
    .map((x) => x.b)
    .join("");
};
