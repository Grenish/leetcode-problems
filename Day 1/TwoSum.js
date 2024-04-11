/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const seen = new Map();
  for (let i = 0; ; i++) {
    const x = nums[i];
    const y = target - x;
    if (seen.has(y)) {
      return [seen.get(y), i];
    }
    seen.set(x, i);
  }
};

// Runtime: 63 ms
// Memory usage: 51.61 MB
