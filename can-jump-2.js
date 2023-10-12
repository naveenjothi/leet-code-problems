function jump(nums) {
  function calculateSteps(maxIndex, steps) {
    if (maxIndex == 0) return steps;
    if (maxIndex <= nums[0]) return steps + 1;

    for (let i = 0; i < maxIndex; i++) {
      const pos = nums[i];
      if (pos >= maxIndex - i) {
        return calculateSteps(i, steps + 1);
      }
    }
  }

  return calculateSteps(nums.length - 1, 0);
}

console.log(jump([2, 4]));
