/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const firstResult = [];
  const secondResult = [];

  for (let i = 0; i < s.length; i++) {
    firstResult.push(s[i].charCodeAt());
  }

  for (let i = 0; i < t.length; i++) {
    secondResult.push(t[i].charCodeAt());
  }

  return String.fromCharCode(
    secondResult.reduce((a, b) => a + b, 0) -
      firstResult.reduce((a, b) => a + b, 0)
  );
};
