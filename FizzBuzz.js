/**
 * FizzBuzz
 *
 * Write a function that prints the numbers from 1 to n.
 * But for multiples of three print "Fizz" instead of the number
 * and for the multiples of five print "Buzz".
 * For numbers which are multiples of both three and five print "FizzBuzz".
 *
 * Example:
 * fizzBuzz(15);
 *
 * Output:
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * FizzBuzz
 *
 * @format
 */

function fizzBuzz(n) {
  return Array.from({ length: n }, (_, index) => {
    const number = index + 1;
    if (number % 15 === 0) return "FizzBuzz";
    if (number % 3 === 0) return "Fizz";
    if (number % 5 === 0) return "Buzz";
    return number;
  });
}
