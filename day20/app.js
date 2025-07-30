var reverse = function (x) {
  //   const str = Math.abs(x).toString().split("").reverse().join("");
  //   const reversed = x < 0 ? -parseInt(str) : parseInt(str);

  //   if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) {
  //     return 0;
  //   }

  //   return reversed;
  //   let str = x.toString();
  //   let result = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     result += str[i];
  //   }

  //   const reversed = x < 0 ? -parseInt(result) : parseInt(result);
  //   if (reversed < -(2 ** 31) || reversed > 2 ** 31) {
  //     return 0;
  //   }
  //   return reversed
  let str = String(Math.abs(x));
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  const reversed = x < 0 ? -result : +result;
  if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) {
    return 0;
  }
  return reversed;
};
console.log(reverse(-123));
console.log(reverse(123));
console.log(reverse(2147483648));
