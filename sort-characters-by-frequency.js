/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const characterFrequencies = {};

  for (const character of s) {
    characterFrequencies[character] = characterFrequencies[character]
      ? characterFrequencies[character] + 1
      : 1;
  }

  return Object.entries(characterFrequencies)
    .sort((a, b) => b[1] - a[1])
    .map((x) => x[0].repeat(x[1]))
    .join("");
};
