/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let a = s.split("");
  let b = t.split("");
  let c = [];
  let d = [];

  for (let i = 0; i < a.length; i++) {
    a[i] !== "#" ? c.push(a[i]) : c.pop();
  }

  for (let i = 0; i < b.length; i++) {
    b[i] !== "#" ? d.push(b[i]) : d.pop();
  }

  return c.join("") === d.join("");
};
