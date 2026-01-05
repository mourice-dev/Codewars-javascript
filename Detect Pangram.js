/** @format */

function isPangram(string) {
  const clean = string.toLowerCase().replace(/[^a-z]/g, "");
  const unique = new Set(clean);
  return unique.size === 26;
}
