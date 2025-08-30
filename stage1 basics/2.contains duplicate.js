var containsDuplicate = function (nums) {
    // let sorted = nums.sort((a, b) => a - b);
    // for (let i = 0; i < sorted.length; i++) {
    //     if (sorted[i] === sorted[i + 1]) {
    //         return true;
    //     }
    // }
    // return false    
    let j = 1, i = 0;
    // while (i < nums.length && j < nums.length) {
    //     if (nums[i] === nums[j]) {
    //         return [i, j]
    //     }
    //     j++;
    //     if (j >= nums.length) {
    //         i++;
    //         j = i + 1
    //     }
    // }
    // return false

    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[j] === nums[i]) {
    //         return [j, i];
    //     }
    //     else {
    //         if (j >= nums.length) {
    //             // i++;
    //             j = i + 1
    //         }
    //     }
    // }
    // return false
    // for (let i = 0; i < nums.length; i++) {
    //     let count = 0;
    //     for (let j = 0; j < nums.length; j++) {
    //         if (nums[i] === nums[j]) {
    //             count++;
    //         }
    //     }
    //     if (count === 2) {
    //         return true;
    //     }
    // }
    // return false;

    // let seen = new Set(nums);
    // return seen.size!==nums.length
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return true
        }
        map.set(nums[i])
    }
    return false
    // for (let i = 0; i < nums.length; i++) {
    //     if([seen[i]]) {

    //     }
    // }
};
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([2, 14, 18, 22, 22]))