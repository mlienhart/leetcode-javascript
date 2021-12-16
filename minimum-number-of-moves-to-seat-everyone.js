/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => (a > b ? 1 : -1));
  students.sort((a, b) => (a > b ? 1 : -1));
  let a = 0;

  for (let i = 0; i < seats.length; i++) {
    a = a + Math.abs(seats[i] - students[i]);
  }

  return a;
};
