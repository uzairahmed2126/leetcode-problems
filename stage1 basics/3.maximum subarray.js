var maxSubArray = function (nums) {
    // let map = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     if (map.has(nums[i])) {
    //         return true
    //     }
    //     map.set(nums[i])
    // }
    // return map
    // let sum = 0;
    // let arr = [];
    // let max = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     sum += nums[i];
    //     max = nums[i];
    //     if (sum < max) {
    //         sum = max;
    //     }
    //     arr.push(sum);
    // }
    // return arr;
    //if the value is comes in minus after addition then do not include

    // let sum = 0;
    // let max = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     sum += nums[i];
    //     if (sum > max) {
    //         max = sum
    //     }

    //     if (sum < 0) {
    //         sum = 0
    //     }
    // }
    // return max
    let sum = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(nums[i], sum + nums[i]);
        max = Math.max(max, sum);
    }

    return max;
    // let arr = []
    // for (let i = 0; i < nums.length; i++) {
    //     let sum = 0;
    //     for (let j = i; j < nums.length; j++) {
    //         sum += nums[j]
    //         arr.push(sum)
    //     }
    // }
    // return Math.max(...arr)
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([-2, -1]))
console.log(-1 - 3)