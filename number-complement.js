/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let result = num.toString(2).split("");

  for (let i = 0; i < result.length; i++) {
    result[i] === "0" ? (result[i] = "1") : (result[i] = "0");
  }

  return parseInt(result.join(""), 2);
};
