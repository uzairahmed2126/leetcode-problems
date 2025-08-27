let result = "";
let n = 5;
for (let i = 0; i < n; i++) {
    for (let j = i; j < n - 1; j++) {
        result += " "
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        result += "*"
    }
    if (i < n - 1) {
        result += '\n'
    }
}
result+='\n'
for (let i = 0; i < n; i++) {
    for (let l = 0; l < i; l++) {
        result += " "
    }
    for (let j = i; j < (2 * n - i) - 1; j++) {
        result += '*'
    }
    if (i < n - 1) {
        result += '\n'
    }
}

console.log(result)