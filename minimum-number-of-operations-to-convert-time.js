/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
  if (current === correct) {
    return 0;
  }

  const a = +(current.split(":")[0] * 60) + +current.split(":")[1];
  const b = +(correct.split(":")[0] * 60) + +correct.split(":")[1];
  let c = b - a;
  let d = 0;

  while (c !== 0) {
    if (c % 60 === 0) {
      c = c - 60;
      d++;
    } else if (c % 15 === 0) {
      c = c - 15;
      d++;
    } else if (c % 5 === 0) {
      c = c - 5;
      d++;
    } else {
      c = c - 1;
      d++;
    }
  }

  return d;
};
