/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let a = [];

  for (let i = 0; i < mat.length; i++) {
    a.push({ a: i, b: mat[i].filter(Boolean).length });
  }

  return a
    .sort((a, b) => a.b - b.b)
    .slice(0, k)
    .map((x) => x.a);
};
