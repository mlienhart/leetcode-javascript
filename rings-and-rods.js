/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  let a0 = new Set();
  let a1 = new Set();
  let a2 = new Set();
  let a3 = new Set();
  let a4 = new Set();
  let a5 = new Set();
  let a6 = new Set();
  let a7 = new Set();
  let a8 = new Set();
  let a9 = new Set();
  let b = 0;
  let c = 3;

  for (let i = 0; i < rings.length; i++) {
    if (rings[i + 1] === "0") {
      a0.add(rings[i]);
    }
    if (rings[i + 1] === "1") {
      a1.add(rings[i]);
    }
    if (rings[i + 1] === "2") {
      a2.add(rings[i]);
    }
    if (rings[i + 1] === "3") {
      a3.add(rings[i]);
    }
    if (rings[i + 1] === "4") {
      a4.add(rings[i]);
    }
    if (rings[i + 1] === "5") {
      a5.add(rings[i]);
    }
    if (rings[i + 1] === "6") {
      a6.add(rings[i]);
    }
    if (rings[i + 1] === "7") {
      a7.add(rings[i]);
    }
    if (rings[i + 1] === "8") {
      a8.add(rings[i]);
    }
    if (rings[i + 1] === "9") {
      a9.add(rings[i]);
    }
    i++;
  }

  if (a0.size === c) {
    b++;
  }
  if (a1.size === c) {
    b++;
  }
  if (a2.size === c) {
    b++;
  }
  if (a3.size === c) {
    b++;
  }
  if (a4.size === c) {
    b++;
  }
  if (a5.size === c) {
    b++;
  }
  if (a6.size === c) {
    b++;
  }
  if (a7.size === c) {
    b++;
  }
  if (a8.size === c) {
    b++;
  }
  if (a9.size === c) {
    b++;
  }

  return b;
};
