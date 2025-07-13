//   return Math.floor(Math.sqrt(x));
// x = (x + num / x) / 2
// return x
var mySqrt = function (x) {
  if (x === 0 || x === 1) return x;

  let low = 0;
  let high = x;
  let ans;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let square = mid * mid;
    if (square === x) {
      return mid;
    } else if (square < x) {
      low = mid + 1;
      ans = mid; 
    } else {
      high = mid - 1;
    }
  }

  return ans; // floor of sqrt
};

console.log(mySqrt(4));
console.log(mySqrt(25));
console.log(mySqrt(2));
console.log(mySqrt(0));
console.log(mySqrt(1));
