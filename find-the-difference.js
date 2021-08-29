/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let a = s.split("");
  let b = t.split("");
  let c = [];
  let d = [];

  for (let i = 0; i < s.length; i++) {
    c.push(a[i].charCodeAt());
  }

  for (let i = 0; i < t.length; i++) {
    d.push(b[i].charCodeAt());
  }

  return String.fromCharCode(
    d.reduce((a, b) => a + b, 0) - c.reduce((a, b) => a + b, 0)
  );
};
