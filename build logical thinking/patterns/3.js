let result = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        result += j
    }
    if (i < 5) {
        result += '\n'
    }
}
console.log(result)