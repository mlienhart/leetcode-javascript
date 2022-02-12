/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function (num) {
  let a = `${num}`.split("");

  if (num > 0) {
    a.sort((a, b) => (a > b ? 1 : -1));
    if (a[0] === "0") {
      let b = a.find((x) => x > 0);
      for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
          a[i] = "";
          break;
        }
      }

      return +[...b, ...a].join("");
    } else {
      return +a.join("");
    }
  } else {
    a.sort((a, b) => (a < b ? 1 : -1));
    a.pop();

    return -a.join("");
  }
};
