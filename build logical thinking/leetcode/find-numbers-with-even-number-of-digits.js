var findNumbers = function (nums) {
    let countEven = 0;
    let str = "";
    for (let i = 0; i < nums.length; i++) {
        str += nums[i];
        if (str.length % 2 === 0) {
            countEven++
        }
        str = ''
    }
    return countEven
    // let convertIntoStr = nums.map(item => toString(item));

};
console.log(findNumbers([12, 345, 2, 6, 7896]))