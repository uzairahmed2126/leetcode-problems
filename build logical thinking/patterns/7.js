let result = "";
let n = 5;
for (let i = 0; i < n; i++) {

    for (let j = i; j < n; j++) {
        result += " "
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        result += '*'
    }
    // if (i <= 5) {
    result += '\n'
    // }
}
console.log(result)