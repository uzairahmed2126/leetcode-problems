var isValid = function (s) {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map[char]) {
      stack.push(map[char]);
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
console.log(isValid("()[]{}"))
console.log(isValid("()[]{}"))
console.log(isValid("([})"))
console.log(isValid("(}"))