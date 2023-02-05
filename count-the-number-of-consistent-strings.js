/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let result = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].split("").every((x) => allowed.split("").includes(x))) {
      result++;
    }
  }

  return result;
};
