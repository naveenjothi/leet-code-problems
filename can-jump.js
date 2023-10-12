function canJump(nums) {
  let right = 0;
  let maxIndex = 0;
  while (right < nums.length) {
    const pos = nums[right];
    if (right > maxIndex) {
      return false;
    }
    maxIndex = Math.max(maxIndex, right + pos);
    right++;
  }
  console.log("max", maxIndex);
  return true;
}

console.log(canJump([2, 3, 1, 1, 4]));
