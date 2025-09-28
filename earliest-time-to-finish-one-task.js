/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function (tasks) {
  return Math.min(...tasks.map((x) => x[0] + x[1]));
};
