/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  let a = number.split("-").join("").split(" ").join("").split("");
  let b = [];

  while (a.length > 4) {
    b.push(a.splice(0, 3));
  }

  if (a.length === 4) {
    b.push(a.splice(0, 2));
    b.push(a);
  } else {
    b.push(a);
  }

  return b.join("-").split(",").join("");
};
