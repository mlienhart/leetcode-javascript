/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);

  let result = 0;

  for (let i = 0; i < trainers.length; i++) {
    if (players[result] <= trainers[i]) {
      result++;
    }
  }

  return result;
};
