/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  if (target.length > s.length) {
    return 0;
  }

  let a = s.split("");
  let b = target.split("");
  let c = new Map();
  let d = new Map();
  let e = Infinity;

  for (let i = 0; i < a.length; i++) {
    c.set(a[i], (c.get(a[i]) || 0) + 1);
  }

  for (let i = 0; i < b.length; i++) {
    d.set(b[i], (d.get(b[i]) || 0) + 1);
  }

  for (let [key, value] of d) {
    e = Math.min(e, c.get(key) / value);
  }

  return isNaN(e) ? 0 : Math.floor(e);
};
