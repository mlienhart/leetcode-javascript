/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let a = 0;

  for (let i = 1; i <= num; i++) {
    let b = i
      .toString()
      .split("")
      .reduce((a, b) => +a + +b);
    if (b % 2 === 0) {
      a++;
    }
  }

  return a;
};
