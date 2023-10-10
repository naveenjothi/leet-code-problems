function majorityElement(nums) {
  if (nums.length == 1) return nums[0];
  let elem = 0;
  let max = 0;
  for (let j = 0; j < nums.length; j++) {
    let count = 0;
    for (let k = 1; k < nums.length; k++) {
      if (nums[k] == nums[j]) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      elem = nums[j];
    }
  }
  return elem;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
