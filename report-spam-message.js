/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function (message, bannedWords) {
  const set = new Set(bannedWords);
  let result = 0;

  for (const word of message) {
    if (set.has(word)) {
      result++;
    }
  }

  return result > 1;
};
