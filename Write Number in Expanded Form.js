/** @format */

function expandedForm(num) {
  return num
    .toString()
    .split("")
    .map((digit, index, arr) =>
      digit !== "0" ? digit + "0".repeat(arr.length - index - 1) : ""
    )
    .filter(Boolean)
    .join(" + ");
}
