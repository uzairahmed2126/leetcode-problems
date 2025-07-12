var isPalindrome = function (x) {
  // let char = String(x);
  // let arr = [char];
  // let splited = arr[0].split("").reverse();
  // let result = Number(splited.join(""));
  // return x === result;
  // const string =  String(x);
  // const splited = string.split('');
  // const reversed = splited.reverse().join('');
  // return reversed===string

  const string = String(x);
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
};
console.log(isPalindrome(121));