/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  text = text.split(" ");
  brokenLetters = brokenLetters.split("");
  let result = new Set();

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (text[i].includes(b[j])) {
        result.add(i);
      }
    }
  }

  return text.length - result.size;
};
