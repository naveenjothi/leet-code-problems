function insertionSort(nums) {
  const len = nums.length - 1;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (nums[j] < nums[j + 1]) {
        const temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}
console.log(insertionSort([5, 3, 6, 4, 2, 9, 7]));
//insertion sort was good when using linked list
