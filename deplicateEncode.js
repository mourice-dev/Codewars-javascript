/** @format */

function duplicateEncode(word) {
  word = word.toLowerCase();
  return word
    .split("")
    .map((char) => (word.indexOf(char) === word.lastIndexOf(char) ? "(" : ")"))
    .join("");
}

