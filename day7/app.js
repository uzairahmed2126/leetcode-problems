// var mergeTwoLists = function (list1, list2) {
// //   let result = [];
// //   for (let i = 0; i < list1.length; i++) {
// //     if (list1[i] >= list2[i]) {
// //       result.push(list1[i]);
// //     }
// //   }
// //   return result;
// return list1.concat(list2).sort()
// };
// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

var lengthOfLastWord = function(s) {
    const trimed = s.trim();
    const splitedIntoWords =  trimed.split(' ');
    return splitedIntoWords[splitedIntoWords.length-1].length

};
console.log(lengthOfLastWord( "   fly me   to   the moon  "))
