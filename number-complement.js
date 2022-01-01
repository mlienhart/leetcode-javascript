/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let a = num.toString(2);
  let b = [];

  for (let i = 0; i < a.length; i++) {
    a[i] === "0" ? b.push("1") : b.push("0");
  }

  return parseInt(b.join(""), 2);
};
