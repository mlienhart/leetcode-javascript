/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let a = num.toString(2).split("");

  for (let i = 0; i < a.length; i++) {
    a[i] === "0" ? (a[i] = "1") : (a[i] = "0");
  }

  return parseInt(a.join(""), 2);
};
