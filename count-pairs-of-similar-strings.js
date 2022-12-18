/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  let a = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      let b = [...new Set(words[i])].sort((a, b) => (a > b ? 1 : -1)).join("");
      let c = [...new Set(words[j])].sort((a, b) => (a > b ? 1 : -1)).join("");
      if (i !== j && b === c) {
        a++;
      }
    }
  }

  return a / 2;
};
