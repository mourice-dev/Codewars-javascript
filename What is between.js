/** @format */

function between(a, b) {
  let part = [];
  for (let i = a; i <= b; i++) {
    part.push(i);
  }
  return part;
}
console.log(between(1, 4));
