/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const result = [];

  for (let i = 0; i < mat.length; i++) {
    result.push({ rowIndex: i, soldierCount: mat[i].filter(Boolean).length });
  }

  return result
    .sort((a, b) => a.soldierCount - b.soldierCount)
    .slice(0, k)
    .map((x) => x.rowIndex);
};
