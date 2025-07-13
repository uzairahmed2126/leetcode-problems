var plusOne = function (digits) {
  const length = digits.length;
  let intIntoStr = "";
  let strIntoNum = null;
  for (let i = 0; i < length; i++) {
    intIntoStr += digits[i];
  }
  strIntoNum = BigInt(intIntoStr);
  intIntoStr = String(strIntoNum + 1n);
  return intIntoStr.split("").map((str) => +str);
  //   let addOne = digits[legnth - 1] + 1;
  //   if (addOne >= 10) {
  //     const splited = addOne.toString().split("");
  //     addOne = splited.map((str) => +str);
  //   }
  //   return digits.slice(0, digits.length - 1).concat(addOne);
};
console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([9, 9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]));
