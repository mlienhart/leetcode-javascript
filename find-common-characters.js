/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let a = [];
  let b = words[0].split("");

  for (let i = 0; i < b.length; i++) {
    if (words.every((x) => x.includes(b[i]))) {
      a.push(b[i]);
      words = words.map((x) => x.replace(b[i], ""));
    }
  }

  return a;
};
