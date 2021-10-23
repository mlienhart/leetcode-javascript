/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let a = text.split(" ").filter((x) => x !== "");
  let b = text.split("").filter((x) => x === " ");
  let c = Math.floor(b.length / (a.length - 1));
  let d = [];
  let e = b.length;
  let f = b.length % (a.length - 1);
  let g = 0;
  let h = 0;

  if (a.length === 1) {
    d.push(a[0]);
    for (let i = 0; i < b.length; i++) {
      d.push(" ");
    }
    return d.join("");
  }

  for (let i = 0; i < a.length; i++) {
    d.push(a[i]);
    if (i < a.length - 1) {
      while (g < c) {
        d.push(" ");
        g++;
        e = e - 1;
      }
      g = 0;
    }

    if (i === a.length - 1) {
      while (h < f) {
        d.push(" ");
        h++;
      }
    }
  }

  return d.join("");
};
