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
    for (let j = 0; j < brokenLetters.length; j++) {
      if (text[i].includes(brokenLetters[j])) {
        result.add(i);
      }
    }
  }

  return text.length - result.size;
};
