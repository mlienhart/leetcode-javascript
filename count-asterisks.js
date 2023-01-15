/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  const list = s.split("|");
  let result = 0;

  for (let i = 0; i < list.length; i = i + 2) {
    let asterisksCount = list[i].split("").filter((x) => x === "*").length;
    if (asterisksCount) {
      result = result + asterisksCount;
    }
  }

  return result;
};
