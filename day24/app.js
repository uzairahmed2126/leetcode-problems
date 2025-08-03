var myAtoi = function (s) {
  const str = parseInt(s.toLowerCase());
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;
  if (str <= INT_MIN) return INT_MIN;
  if (str >= INT_MAX) return INT_MAX;
  return isNaN(str) ? 0 : str;
  let i = 0;
  let result = "";
  while (i < str.length) {
    if (str < 0) {
      result += str[i];
    }
    if (isNaN(+str[i])) {
      break;
    }
    result += str[i];
    i++;
  }
  return result;
  //   let result = "";
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i]) {
  //       result += str[i];
  //     }
  //   }
  //   return result;
  //   let result = "";
  //   for (let i = 0; i < s.length; i++) {
  //     // const ASCIICode =  s.toLowerCase()[i].charCodeAt();
  //     if (typeof Number(s[i]) === "number") {
  //       result += s[i];
  //     }

  //   }
  //   return result;

  // return Number.parseInt(s);
  // return s.includes(s.charCodeAt(97<=123||97>=123))
  // for(let i = 0;i<s.length;i++) {

  // }
};
console.log(myAtoi("45"));
console.log(myAtoi("1337c0d3"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("   -042"));
console.log(myAtoi("-91283472332")); //-2147483648
console.log(myAtoi("   +0 123"))
