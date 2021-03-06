/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let a = s.replace(/\D/g, "");
  let b = a.split("");
  let c = new Set(b);

  return c.size > 1 ? +[...c].sort((a, b) => b - a)[1] : -1;
};
