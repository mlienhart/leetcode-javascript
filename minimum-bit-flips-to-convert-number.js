/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  let binaryStart = start.toString(2);
  let binaryGoal = goal.toString(2);
  let result = 0;

  if (binaryStart.length > binaryGoal.length) {
    binaryGoal = binaryGoal.padStart(binaryStart.length, "0");
  }

  if (binaryStart.length < binaryGoal.length) {
    binaryStart = binaryStart.padStart(binaryGoal.length, "0");
  }

  for (let i = 0; i < binaryStart.length; i++) {
    if (binaryStart[i] !== binaryGoal[i]) {
      result++;
    }
  }

  return result;
};
