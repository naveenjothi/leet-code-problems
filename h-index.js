function calculateHIndex(nums) {
  //   if (nums.length == 1) return 1;
  let max = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    const hIndex = nums[i];
    let count = 1;
    if (hIndex <= maxCount) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (hIndex <= nums[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      max = hIndex;
    }
  }

  return maxCount == 1 ? maxCount : max;
}

console.log(calculateHIndex([3, 0, 5, 4, 6]));
const t = new Set();
