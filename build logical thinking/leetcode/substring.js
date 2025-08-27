var lengthOfLongestSubstring = function (s) {
    let current = ''
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (current.includes(char)) {
            current = current.slice(current.indexOf(char) + 1);
        }
        current += char;
        maxLength = Math.max(maxLength, current.length)
    }
    return maxLength;
};
console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("pwwkew"))