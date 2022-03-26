/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let a = [];
  let b = s.split(" ");

  if (pattern.length !== b.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    a.push({ x: pattern[i], y: b[i] });
  }

  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (
        (a[i].x === a[j].x && a[i].y !== a[j].y) ||
        (a[i].x !== a[j].x && a[i].y === a[j].y)
      ) {
        return false;
      }
    }
  }

  return true;
};
