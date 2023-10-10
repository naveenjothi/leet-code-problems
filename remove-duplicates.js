var removeDuplicates = function (nums) {
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    let count = 0;

    while (i < nums.length && nums[i] == nums[j]) {
      count++;
      if (count > 2) {
        nums.splice(i, 1, "_");
      }
      i++;
    }
    i = j;
  }
  //   nums.sort((a,b)=>{return a-b});
  let index = nums.indexOf("_");
  while (index != -1) {
    nums.splice(index, 1);
    index = nums.indexOf("_");
  }
  console.log("nums", nums);
  return nums.length;
};

console.log(removeDuplicates([1, 2, 2, 2]));
