var longestCommonPrefix = function (strs) {
  //   if (strs.length === 0) return "";
  //   let prefix = strs[0];
  //   for (let i = 1; i < strs.length; i++) {
  //     let word = strs[i];
  //     while (word.indexOf(prefix) !== 0) {
  //       prefix = prefix.slice(0, -1);
  //       if (prefix === "") return "";
  //     }
  //   }
  //   return prefix;
  if (!strs.length) return "";
  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
};
console.log(strs(["flower","flow","flight"]))
console.log(strs(["dog","racecar","car"]))