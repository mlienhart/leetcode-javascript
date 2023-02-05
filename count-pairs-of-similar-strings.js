/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  let result = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      let firstWord = [...new Set(words[i])]
        .sort((a, b) => (a > b ? 1 : -1))
        .join("");
      let secondWord = [...new Set(words[j])]
        .sort((a, b) => (a > b ? 1 : -1))
        .join("");
      if (i !== j && firstWord === secondWord) {
        result++;
      }
    }
  }

  return result / 2;
};
