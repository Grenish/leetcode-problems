# Solution

### Sliding Window Approach

The sliding window approach is a method that allows you to track subsets of data in a larger data set or sequence. It's often used in array/string problems where you need to find a contiguous sequence that satisfies certain conditions.

Here's a step-by-step explanation of how it works:

1. Initialize a window: This could be an actual data structure like an array, or it could just be two pointers (indices) that represent the start and end of the window in the data.

2. Move the window: Depending on the problem, you might move the window by shifting it to the right, expanding or shrinking it. In many problems, you keep expanding the window until it no longer satisfies the problem's conditions.

3. Update the solution: As the window moves, you update your solution. This could be the maximum sum of elements in the window, the minimum length of the window, etc.

4. Repeat steps 2 and 3: Continue moving the window and updating your solution until you've examined all possible windows.

```js
var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let res = 0;
    let map = new Map();
    for (let j = 0, i = 0; j < n; j++) {
      if (map.has(s[j])) {
        i = Math.max(map.get(s[j]), i);
      }
    res = Math.max(res, j - i + 1);
    map.set(s[j], j + 1);
    }
  return res;
};
```
