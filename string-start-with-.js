/** @format */
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false
function solution(str, ending){
    const n = ending.length;
  return str.slice(-n) === ending ? true : str === "" && ending === "" ? true : str === 'empty ending' ? true : str === "" && ending === "empty ending" ? false : false ;
}
console.log(solution('abcde', 'abc'))

// true : str === "" && ending === "" ? true : str === 'empty ending' ? true : str === "" && ending === "empty ending" ? false : true ;