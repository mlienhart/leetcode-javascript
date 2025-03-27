/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  return (
    word.length > 2 &&
    /^[0-9a-z]+$/i.test(word) &&
    /[aeiou]/i.test(word) &&
    /[b-df-hj-np-tv-z]/i.test(word)
  );
};
