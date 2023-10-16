function productSelf(nums) {
  // O(n2)
  // const answers = [];
  // for (let i = 0; i < nums.length; i++) {
  //   let multipliedVal = 1;
  //   for (let j = 0; j < nums.length; j++) {
  //     if (i == j) continue;
  //     multipliedVal = multipliedVal * nums[j];
  //     multipliedVal = multipliedVal != 0 ? multipliedVal : 0;
  //   }
  //   answers[i] = multipliedVal;
  // }
  // return answers;
  const arrLen = nums.length;
  const ans = Array.from({ length: arrLen }).map((x) => 1);
  let curr = 1;
  for (let i = 0; i < arrLen; i++) {
    ans[i] *= curr;
    curr *= nums[i];
  }

  curr = 1;
  for (let i = arrLen - 1; i >= 0; i--) {
    ans[i] *= curr;
    curr *= nums[i];
  }

  return ans;
}
console.log("productSelf", productSelf([1, 2, 3, 4]));
