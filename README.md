## Hex Validator

Given a string, determine whether it is a valid CSS hex color. A valid CSS hex color must:

- Start with a #, and
  be followed by either 3 or 6 hexadecimal characters.
- Hexadecimal characters are numbers 0 through 9 and letters a through f (case-insensitive).

- `Regex` Using regex to return true or false when a str is compared to a regular expression starting with a `#` followed by 3 or 6 hexidecimals

- Ensure the regex starts with hash `/^#/` - `^` start anchor

- `(...)` Capture Group

- two valid patterns `[a-f0-9]{6}` or `[a-f0-9]{3}` - `([a-f0-9]{6}|[a-f0-9]{3})`

- `return regex.test(str)` check if true
