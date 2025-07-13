var singleNumber = function (nums) {
  // let output = [];
  // for(let i = 0;i<nums.length;i++) {
  //     if(!output.includes(nums[i])){
  //         output.push(nums[i]);
  //     }
  // }
  // // const set ;
  // return nums.sort((a,b)=>a-b).reduce((acc,cur)=>{
  //     if(acc!==cur)  {
  //         return cur;
  //     }else if(acc===cur) return acc
  // },0);

  //   let frequencyMap = {};
  //   for (let i = 0; i < nums.length; i++) {
  //     frequencyMap[nums[i]] = (frequencyMap[nums[i]] || 0) + 1;
  //   }
  // return Number(nums.filter((num) => frequencyMap[num] === 1));

  let store = 0;
  let sorted = nums.sort((a, b) => a - b);

  while (store < sorted.length) {
    if (store === sorted.length - 1 || sorted[store] !== sorted[store + 1]) {
      return sorted[store];
    } else {
      store += 2;
    }
  }
};
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
