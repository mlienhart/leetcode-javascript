/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const first = s.split("");
  const second = t.split("");
  const firstResult = [];
  const secondResult = [];

  for (let i = 0; i < first.length; i++) {
    first[i] !== "#" ? firstResult.push(first[i]) : firstResult.pop();
  }

  for (let i = 0; i < second.length; i++) {
    second[i] !== "#" ? secondResult.push(second[i]) : secondResult.pop();
  }

  return firstResult.join("") === secondResult.join("");
};
