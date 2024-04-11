function twoSum(nums: number[], target: number): number[] {
  const seen: Map<number, number> = new Map();

  for (let i = 0; ; i++) {
    const x = nums[i];
    const y = target - x;

    if (seen.has(y)) {
      return [seen.get(y)!, i];
    }

    seen.set(x, i);
  }
}

// Runtime: 57 ms
// Memory usage: 53.16 MB
