/** @format */
// ery simple, given a number, find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34
function opposite(number) {
  if (number === 0) {
    return 0;
  }
  return number * -1;
}
console.log(opposite(0));
