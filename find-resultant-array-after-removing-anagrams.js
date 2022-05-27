/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  let a = [words[0]];

  for (let i = 0; i < words.length - 1; i++) {
    let b = (c) => {
      return c
        .split("")
        .sort((a, b) => (a > b ? 1 : -1))
        .join("");
    };
    let d = b(words[i]);
    let e = b(words[i + 1]);
    if (d !== e) {
      a.push(words[i + 1]);
    }
  }

  return a;
};
