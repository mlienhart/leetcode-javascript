/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const result = [];

  for (let i = 0; i < indices.length; i++) {
    result.push({ targetIndex: indices[i], originalCharacter: s[i] });
  }

  return result
    .sort((a, b) => a.targetIndex - b.targetIndex)
    .map((x) => x.originalCharacter)
    .join("");
};
