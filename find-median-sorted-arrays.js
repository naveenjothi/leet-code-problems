var findMedianSortedArrays = function (nums1, nums2) {
  const combinedArray = [...nums1, ...nums2];
  const len = combinedArray.length;
  combinedArray.sort((a, b) => a - b);
  if (len % 2 == 0) {
    const medianIdx =
      (combinedArray[Math.floor((len - 1) / 2)] +
        combinedArray[Math.floor(len / 2)]) /
      2;
    return medianIdx;
  } else {
    const mid = Math.floor(len / 2);
    return combinedArray[mid];
  }
};

console.log(findMedianSortedArrays([3], [-2, -1]));
