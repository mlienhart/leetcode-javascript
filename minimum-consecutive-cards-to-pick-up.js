/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
  let a = {};
  let b = Infinity;

  for (let i = 0; i < cards.length; i++) {
    if (a[cards[i]] !== undefined) {
      b = Math.min(b, i - a[cards[i]] + 1);
    }
    a[cards[i]] = i;
  }

  return b !== Infinity ? b : -1;
};
