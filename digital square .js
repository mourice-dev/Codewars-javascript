/** @format */
function squareDigits(num) {
  // Use the string "number" to check the type correctly
  if (typeof num === "number") {
    // 1. Convert to string and split into an array
    const nums = num.toString().split("");
    
    // 2. Convert each string character into a Number
    const nm = nums.map(Number);
    
    // 3. Square each digit, join them, and convert the whole thing back to a Number
    return Number(nm.map((n) => n ** 2).join(""));
  } else {
    // If the input is a string (or anything else), return it unchanged
    return num;
  }
}

// Test cases
console.log(squareDigits(9119)); // Output: 811181 (Integer)
console.log(squareDigits(765));  // Output: 493625 (Integer)
console.log(squareDigits("9414")); // Output: "9414" (String unchanged)

