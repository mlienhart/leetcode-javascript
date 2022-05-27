/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  let a = [words[0]];

  for (let i = 0; i < words.length - 1; i++) {
    let b = words[i]
      .split("")
      .sort((a, b) => (a > b ? 1 : -1))
      .join("");
    let c = words[i + 1]
      .split("")
      .sort((a, b) => (a > b ? 1 : -1))
      .join("");
    if (b !== c) {
      a.push(words[i + 1]);
    }
  }

  return a;
};
