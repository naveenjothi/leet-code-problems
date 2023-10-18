function bubbleSort(nums) {
  let len = nums.length - 1;
  for (let i = 0; i < len; i++) {
    let isSwap = false;
    for (let j = 0; j < len - i; j++) {
      if (nums[j + 1] > nums[j]) continue;
      const temp = nums[j];
      nums[j] = nums[j + 1];
      nums[j + 1] = temp;
      isSwap = true;
    }
    if (!isSwap) {
      break;
    }
  }

  return nums;
}

console.log(bubbleSort([5, 3, 6, 4, 2, 9, 7]));

// get the array
// loop over the array
//
