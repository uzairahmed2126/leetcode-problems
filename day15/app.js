// var canConstruct = function (ransomNote, magazine) {

// };

// console.log(canConstruct("aa", "ab"));
// console.log(canConstruct("aa", "aab"));
// console.log(canConstruct("aa", "ab"));
// console.log(canConstruct("aab", "baa"));
// console.log(
//   canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
// );
// console.log(
//   canConstruct(
//     "b",
//     "djihebhgdbficbjigegajdfccdjhijegjjiieeihfachjedejgchgdeidagdfghadbbhahcdibiaadhbcfgcffdfbafajfidjdgd"
//   )
// );

var containsDuplicate = function (nums) {
  // const unique =  new Set(nums);
  // return unique.size!==nums.length;
//   const sorted = nums.sort((a,b)=>a-b);
//   let i = 0,
//     j = 1,
//     leng = nums.length;
//   while (i < leng && j < leng) {
//     if (sorted[i] !== sorted[j]) {
//       i++;
//       j++;
//     } else {
//       return true;
//     }
//   }
//   return false;
function containsDuplicate(nums) {
  if (nums.length <= 1) return false;

  const [first, ...rest] = nums;
  if (rest.includes(first)) return true;

  return containsDuplicate(rest);
}
return containsDuplicate(nums)

};
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 3, 4]));

