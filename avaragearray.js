/** @format */

// ASC Week 1 Challenge 5 (Medium #2)
// Create a function that takes a 2D array as an input, and outputs another array that contains the average values for the numbers in the nested arrays at the corresponding indexes.

// Note: the function should also work with negative numbers and floats.

// Examples
// [ [1, 2, 3, 4], [5, 6, 7, 8] ]  ==>  [3, 4, 5, 6]

// 1st array: [1, 2, 3, 4]
// 2nd array: [5, 6, 7, 8]
//             |  |  |  |
//             v  v  v  v
// average:   [3, 4, 5, 6]

function avgArray(arr) {
  return arr[0].map(
    (_, index) =>
      arr.reduce((sum, values) => sum + values[index], 0) / arr.length,
  );
}
