/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let finNum = nums1.concat(nums2).sort((a, b) => a - b);
  let median = 0;
  let start = 0;
  let end = finNum.length - 1;
  let mid = Math.floor((start + end) / 2);

  if (finNum.length % 2 === 0) {
    median = (finNum[mid] + finNum[mid + 1]) / 2;
  } else {
    median = finNum[mid];
  }

  return median;
};
