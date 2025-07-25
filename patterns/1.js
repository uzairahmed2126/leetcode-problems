function pattern(symbol) {
  let result = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      result += symbol;
    }
    result += "\n";
  }

  return result;
}
console.log(pattern("*"));
//*****
//*****
//*****
//*****
