/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  let a = 24 * 60 * 60 * 1000;

  if (date2 > date1) {
    return (new Date(date2) - new Date(date1)) / a;
  }

  return (new Date(date1) - new Date(date2)) / a;
};
