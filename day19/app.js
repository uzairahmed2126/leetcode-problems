var searchInsert = function (nums, target) {
  // for(let  i = 0;i<nums.length;i++) {
  //     if(nums[i]===target) {
  //         return i
  //     }else {
  //         if(nums[i]+1===target) {
  //             return i+1
  //         }else if(nums[i]-1===target) {
  //             return i
  //         }
  //     }
  // }
  let i = 0,
    len = nums.length;
  while (i < len) {
    if (nums[i] >= target) {
      return i;
    }
    i++;
  }
  return len;
};
const nums = Array.from({ length: 100000 }, (_, i) => i * 2); // [0, 2, 4, 6, ..., 199998]
const target = 200000; // greater than the last element (199998)
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1001], 5));
console.log(searchInsert([2, 3, 4, 7, 8, 9], 11));
console.log(searchInsert([2, 7, 8, 9, 10], 9));
console.log(searchInsert([2, 3, 4, 7, 8, 9], 11));
console.log(searchInsert(nums, target));

