/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let a = "00";
  let b = new Set();

  b.add(a);

  let c = 0;
  let d = 0;

  for (let i = 0; i < path.length; i++) {
    if (path[i] === "E") {
      c++;
    }
    if (path[i] === "W") {
      c--;
    }
    if (path[i] === "N") {
      d++;
    }
    if (path[i] === "S") {
      d--;
    }

    a = c.toString() + d.toString();

    if (b.has(a)) {
      return true;
    }

    b.add(a);
  }

  return false;
};
