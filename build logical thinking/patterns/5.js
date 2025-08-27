let result = "";
for (let i = 1; i <= 5; i++) {
    for (let j = i; j <= 5; j++) {
        result += "*"
    }
    if (i < 5) {
        result += '\n'
    }
}
console.log(result)