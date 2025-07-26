var removeDuplicates = function (nums) {
  let i = 0,
    j = 1,
    len = nums.length;
  while (i < len && j < len) {
    if(nums[i]===nums[j]) {
        j++;
    }else {
        i++;
        nums[i]=nums[j]
    }
  }
  return i+1

  //   while (i-1 < len && j < len) {
  //     if (nums[i] === nums[j]) {
  //       j++;

  //     }else {
  //         i++;
  //         nums[i] = nums[j];
  //     }
  //   }
  //   return i;

  // for(let i = 0;i<nums.length;i++) {
  //     for(let  j = 1;j<nums.length;j++) {
  //         if(nums[i]===nums[j]) {
  //             [nums[i],nums[j]]=[,nums[i]];
  //         }
  //     }
  // }
  // return nums
  //   const uniqueNums = [...new Set(nums)];
  //   const lengthOfUnique = uniqueNums.length;
  //   const restNums=  String(nums.slice(lengthOfUnique)).split(',')
  //   const restConvertedIntoUnderScore = restNums.map((item)=>item.replace(item,'_'));
  //   return [...uniqueNums,...restConvertedIntoUnderScore]
  //   const unique = new Set(nums);
  //   let ar =[];
  //   for (const num of unique) {
  //     ar.push(num)
  //   }
  //   return ar;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
