let result = "";
let n = 5;
for (let i = 0; i < n; i++) {
    for (let k = 0; k < i; k++) {
        result += ' '
    }
    for (let j = i; j < (n * 2 - 1) - i; j++) {
        result += "*"
    }
    if (i < n - 1) {
        result += '\n'
    }
}
console.log(result)