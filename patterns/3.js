function pattern(symbol) {
  let result = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 1; j <= i+1; j++) {
      result += j;
    }
    result += "\n";
  }

  return result;
}
console.log(pattern());