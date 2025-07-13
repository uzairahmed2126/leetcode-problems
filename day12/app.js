var addDigits = function (num) {
//   const numArr = String(num).split("");
//   const againNumArr = numArr
//     .reduce((acc, cur) => (acc += +cur),0)
//     .toString()
//     .split("");
//     let result = 0;
//    for(let i = 0;i<againNumArr.length;i++) {
//     result+=+againNumArr[i];
//    }
//    return result
 const isTwoDigit = stringIntoAddition(num).reduce((acc,cur)=>acc+=+cur,0)
 if(isTwoDigit>=10) {
     return String(isTwoDigit).split('').reduce((acc,cur)=>acc+=+cur,0)
 }
 return isTwoDigit
};
function stringIntoAddition(num) {
    const numIntoStr = String(num).split('').reduce((acc,cur)=>acc+=+cur,0);
    return numIntoStr.toString().split('');

}
// console.log(stringIntoAddition(708538619))
console.log(addDigits(38));
console.log(addDigits(199));
console.log(addDigits(708538619));
