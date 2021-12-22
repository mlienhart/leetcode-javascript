/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  let a = `${BigInt(target)}`;
  let b = 0;

  if (a === "0") {
    return 0;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== a[i + 1]) {
      b++;
    }
  }

  return b;
};
