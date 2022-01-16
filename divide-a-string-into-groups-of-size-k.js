/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  let a = s.split("");
  let b = [];

  for (let i = 0; i < s.length / k; i++) {
    b.push(a.splice(0, k));
  }

  let c = b.pop();

  for (let i = c.length; i < k; i++) {
    c.push(fill);
  }

  let e = b.map((x) => x.join(""));

  return [...e, c.join("")];
};
