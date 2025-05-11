/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  const vowelCounts = {};
  const consonantCounts = {};

  for (const letter of s) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      vowelCounts[letter] = vowelCounts[letter] ? vowelCounts[letter] + 1 : 1;
    } else {
      consonantCounts[letter] = consonantCounts[letter]
        ? consonantCounts[letter] + 1
        : 1;
    }
  }

  return (
    Math.max(...Object.values(vowelCounts), 0) +
    Math.max(...Object.values(consonantCounts), 0)
  );
};
