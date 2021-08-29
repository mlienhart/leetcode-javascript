/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let a = s.split("");

  for (let i = 0; i < a.length; i++) {
    if (i % 2 !== 0) {
      a[i] = String.fromCharCode(a[i - 1].charCodeAt() + +a[i]);
    }
  }

  return a.join("");
};
