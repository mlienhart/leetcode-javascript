/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  let a = text.split(" ");
  let b = brokenLetters.split("");
  let c = new Set();

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i].includes(b[j])) {
        c.add(i);
      }
    }
  }

  return a.length - c.size;
};
