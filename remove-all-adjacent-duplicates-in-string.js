/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const result = [];

  for (const character of s) {
    result[result.length - 1] === character
      ? result.pop()
      : result.push(character);
  }

  return result.join("");
};
