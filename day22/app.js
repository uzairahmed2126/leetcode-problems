var isPalindrome = function (s) {
  //   let str = [];
  //   let isPalindrome = "";
  //   for (let i = 0; i < s.length; i++) {
  //     let char = s[i].toLowerCase();
  //     if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122||char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
  //       str.push(char);
  //       isPalindrome+=char
  //     }
  //   }
  //   return str.reverse().join('')===isPalindrome;
  const filteredString = s.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
  return filteredString.split("").reverse().join('')===filteredString;
};
console.log(isPalindrome("0P"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome('Marge, let\'s "[went]." I await {news} telegram.'));
