var twoSum = function (nums, target) {
    let result;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result = [i, j];
                break;
            }
        }
    }
    return result
    // let i = 0, j = 1;
    // while (i < nums.length) {
    //     if (j >= nums.length) {
    //         i++;
    //         j = i + 1;
    //     }
    //     if (nums[i] + nums[j] === target) {
    //         return [i, j];
    //     } else {
    //         j++;
    //     }
    // }
};
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 3], 6))