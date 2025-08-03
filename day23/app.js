// var minCost = function (basket1, basket2) {
//   //   let index = -1;
//   //   let count1 = 0;
//   //   let count2 = 0;
//   //   let i = 0,
//   //     j = 0;
//   //   if (basket1.length !== basket2.length) return -1;

// //   const freq2 = new Set();
// //   for (let fruit of basket1) freq1.add(fruit);
// //   for (let fruit of basket2) freq2.add(fruit);
// //   //   for (let fruit of basket2) freq.add( (freq.has(fruit) || 0) - 1);
// //   return [freq1,freq2];
//   //   const finalBalance = [...basket1, ...basket2]
//   //     .sort((a, b) => a - b)
//   //     .reduce((acc, cur) => {
//   //       acc += cur;
//   //       return acc;
//   //     }, 0);
//   //     return finalBalance
//   //   return finalBalance % 2 === 0 ? finalBalance/2-1 : -1;
// };
// console.log(minCost([4, 2, 2, 2], [1, 4, 1, 2]));
// console.log(minCost([2, 3, 4, 1], [3, 2, 5, 1]));
// console.log(minCost([4, 4, 4, 4, 3], [5, 5, 5, 5, 3]));
// console.log(minCost([1, 1, 1], [1, 1, 1]));
// console.log(minCost([4, 2, 2, 2], [1, 4, 1, 2]));

// var convert = function (s, numRows) {
//   if (s.length <= 1) return s;
// let newStr =  '';
// for(let i =0;i<numRows;i++) {
//     for(let j =0;j<s.length;j++) {
//         newStr+=s[j];
//     }
//     if(i<=numRows-1) {
//         newStr+="\n"
//     }
// }
// return newStr;
//   const rows = Array.from({ length: numRows }, () => "");
//   let currRow = 0;
//   let goingDown = false;
//   for (let i = 0; i < s.length; i++) {
//     rows[currRow] += s[i];
//     if (currRow === 0 || currRow === numRows - 1) {
//       goingDown = !goingDown;
//     }
//     currRow += goingDown ? 1 : -1;
//   }
//   return rows.join('');
// };
// console.log(convert("PAYPALISHIRING", 3)); //"PAHNAPLSIIGYIR"
// // console.log(convert("PAYPALISHIRING",4))
// console.log(convert("A", 1));

// var convertToTitle = function (columnNumber) {
//   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const remainder = columnNumber%26;
//   let result  = "";
//   while(columnNumber<0) {
//     result+=String.fromCharCode(65+remainder)
//   }
//   return result
// };
// console.log(convertToTitle(1));
// console.log(convertToTitle(28));
// console.log(convertToTitle(701));
// console.log(convertToTitle(705));
// console.log(convertToTitle(5205));

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  //   return s.split("").sort().join("") === t.split("").sort().join("");
  //   if (s.length !== t.length) return false;
  //   if (s.length === 1 && t.length === 1) return true;
  //   //   let check = ;
  //   let result = "";
  //   let i = 0,
  //     j = 0;
  return s.match(/[angrm]/gi).includes("a" || "n" || "g" || "r" || "m");
  //   while (i < s.length && j < t.length) {
  //     if (check[i] === s[i] || check[j] === t[j]) {
  //       result += s[i];
  //     }
  //     i++;
  //     j++;
  //   }
  //   for (let i = 0; i < s.length; i++) {

  //   }
  return result;
};
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("a", "ab"));
