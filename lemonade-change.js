/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      a++;
    }
    if (bills[i] === 10) {
      a--;
      b++;
    }
    if (bills[i] === 20) {
      if (b > 0 && a > 0) {
        b--;
        a--;
      } else if (a > 2) {
        a--;
        a--;
        a--;
      } else {
        return false;
      }
    }
  }

  return a >= 0 && b >= 0;
};
