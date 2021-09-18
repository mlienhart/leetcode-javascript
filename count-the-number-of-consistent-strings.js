/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let a = allowed.split("");
  let b = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].split("").every((x) => a.includes(x))) {
      b++;
    }
  }

  return b;
};
