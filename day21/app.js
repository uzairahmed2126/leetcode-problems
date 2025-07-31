// var lengthOfLongestSubstring = function (s) {

//     let seen  = new Set();

// //   let str = "";
// //   for (let i = 0; i < s.length; i++) {
// //     if (s[i] !== s[i + 1]) {
// //       str += s[i];
// //     }
// //   }
// //   return str.length;
// };
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew")); //wke

// var longestPalindrome = function(s) {
//     // let  i =0,j=1;
//     // let str = [];
//     // while(i<s.length&&j<s.length) {
//     //     let  temp  = "";
//     //     temp += s[i];
//     //     str.push(temp);
//     //     i++;
//     // }
//     // return str;
//     const arr = [...s];

// };
// console.log(longestPalindrome("babad"));
var addBinary = function (a, b) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
//   const total = BigInt("0b" + a) + BigInt("0b" + b);
//   return total.toString(2);
};
console.log(addBinary("11", "1"));
console.log(
  addBinary(
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  )
);
