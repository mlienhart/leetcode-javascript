/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let result = s.split("");

  for (let i = 0; i < result.length; i++) {
    if (i % 2 !== 0) {
      result[i] = String.fromCharCode(result[i - 1].charCodeAt() + +result[i]);
    }
  }

  return result.join("");
};
