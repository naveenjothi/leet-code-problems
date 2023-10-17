function calculateMax(nums, k = 3) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    console.log("sum", sum, max);
    if (sum > max) max = sum;
  }
  return max;
}

console.log(
  "Maximum sum is",
  calculateMax([5, 5, -1, -2, 2, -1, -1, -1, -1, 0, 5, 1, 0, -1, 0, -1, -2, -3])
);
