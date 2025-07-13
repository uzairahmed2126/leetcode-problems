var climbStairs = function (n) {
    if (n === 1) return n;
    if (n === 2) return n;
    let first = 1;
    let second = 2;
    let total = 0;
    let i = 3;
    while(i<=n) {
        total = first+second;
        first =  second;
        second = total;
        i++;
    }
    return total;
};
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));