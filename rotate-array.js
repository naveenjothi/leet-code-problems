function rotate(nums, k) {
  k = k % nums.length;

  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  nums = reverseArray(nums, leftIndex, rightIndex);
  leftIndex = 0;
  rightIndex = k - 1;
  nums = reverseArray(nums, leftIndex, rightIndex);
  leftIndex = k;
  rightIndex = nums.length - 1;
  nums = reverseArray(nums, leftIndex, rightIndex);
  return nums;
}

function reverseArray(nums, leftIndex, rightIndex) {
  while (leftIndex < rightIndex) {
    const temp = nums[leftIndex];
    nums[leftIndex] = nums[rightIndex];
    nums[rightIndex] = temp;
    rightIndex--;
    leftIndex++;
  }
  return nums;
}

console.log(rotate([-1], 3));
