    function findUniq(arr) {
  const [a, b, c] = arr;

  // Determine the common value
  const common = (a === b || a === c) ? a : b;

  // Return the number that is not common
  return arr.find(x => x !== common);
}

console.log(findUniq([1, 0, 0]));           // 1
console.log(findUniq([1, 1, 1, 2, 1, 1]));  // 2
console.log(findUniq([0, 0, 0.55, 0, 0]));  // 0.55
