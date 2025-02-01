/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  const result = [];
  let previousWord = "";

  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    if (sortedWord !== previousWord) {
      result.push(word);
      previousWord = sortedWord;
    }
  }

  return result;
};
