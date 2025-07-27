var removeElement = function (nums, val) {
  let sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === val) {
      sorted.splice(i,1);
      i--;
    }
  }
  return sorted.length;
//   let i = 0,
//     j = 1,
//     len = sorted.length;
//   while (i < len && j < len) {
//     if (sorted[i] === val) {
//       sorted[i] = sorted[j];
//       i++;
//     }
//     j++;
//   }
//   return sorted;

  //   let i = 0,
  //     j = 1,
  //     len = nums.length;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === val) {
  //         nums[i] = nums[i+1];
  //     }
  //   }
  //   return nums;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
