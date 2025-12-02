// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
function removeSmallest(numbers) {
  const min = Math.min(...numbers);
  const fminx = numbers.indexOf(min);
  const fmin = numbers[fminx];
  // return fminx
  return numbers.filter((n, i) => i !== fminx);
  // numbers.splice(fminx,1);
}
console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([2, 2, 1, 2, 1]));