// Hex Validator
// Given a string, determine whether it is a valid CSS hex color. A valid CSS hex color must:

// Start with a #, and
// be followed by either 3 or 6 hexadecimal characters.
// Hexadecimal characters are numbers 0 through 9 and letters a through f (case-insensitive).

function isValidHex(str) {
  console.log(str);
  // start with #
  // const regex = /^#/
  // followed by either 3 or 6 hexadecimal characters
  const regex = /^#([a-f0-9]{6}|[a-f0-9]{3})$/i;
  return regex.test(str);
  // return str;
}
