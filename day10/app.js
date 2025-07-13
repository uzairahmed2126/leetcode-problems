var climbStairs = function (n) {
  if(n===1) return 1;
  if(n===2) return 2;
  let first = 1;
  let second = 2;
  let total =  0;
  for (let i = 3; i <= n; i++) {
    total = first+second;
    first=second;
    second=total;
  }
  return total;
};
console.log(climbStairs(4));
console.log(climbStairs(2));
console.log(climbStairs(3));
