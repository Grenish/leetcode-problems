# Solution

There are three ways we could solve the problem.
1. Merge Sort Approach
2. Divide and Conquer Approach
3. Binary Search Approach

# 1. Merge Sort Approach

In this approach, the arrays are first concatenated and then sorted to form a final array. After sorting, we determine the length of the array and extract values such as mid, start, and end.

##### Example:

```js
let arr1 = [1, 3, 4]
let arr2 = [2, 5, 6]
const finalArray = arr1.concat(arr2).sort((a, b) => a - b) // [1, 2, 3, 4, 5, 6]
```

In the code above, arrays are initially concatenated and subsequently sorted.

It is now the moment to determine the starting, middle, and ending elements of the array.

```js
let start = 0
let end = finalArray.length - 1
let mid = Math.floor(finalArray.length / 2)
```
we are taking the start element as 0. As in JavaScript, arrays are zero-indexed, meaning the first element is at index 0, the second element is at index 1, and so on. Therefore, the index of the first element in an array is 0. Similarly the index of the last element in an array is the length of the array minus 1. Whereas, for the middle element, the index is the length of the array divided by 2.

```js
let median = 0
```
We are currently assuming the median to be 0.

```js
if (finalArray.length % 2 === 0) {
    median = (finalArray[mid] + finalArray[mid + 1]) / 2;
} else {
    median = finalArray[mid];
}
```
#### Final Code

```js
var findMedianSortedArrays = function(nums1, nums2) {

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
```

# 2. Divide and Conquer Approach

```js
var findMedianSortedArrays = function (nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const f = (i, j, k) => {
        if (i >= m) {
            return nums2[j + k - 1];
        }
        if (j >= n) {
            return nums1[i + k - 1];
        }
        if (k == 1) {
            return Math.min(nums1[i], nums2[j]);
        }
        const p = Math.floor(k / 2);
        const x = i + p - 1 < m ? nums1[i + p - 1] : 1 << 30;
        const y = j + p - 1 < n ? nums2[j + p - 1] : 1 << 30;
        return x < y ? f(i + p, j, k - p) : f(i, j + p, k - p);
    };
    const a = f(0, 0, Math.floor((m + n + 1) / 2));
    const b = f(0, 0, Math.floor((m + n + 2) / 2));
    return (a + b) / 2;
};
```

# 3. Binary Search Approach

```js
var findMedianSortedArrays = function(nums1, nums2) {

    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    const x = nums1.length;
    const y = nums2.length;
    let start = 0;
    let end = x;
    
    while (start <= end) {
      const partitionX = (start + end) >> 1;
      const partitionY = ((x + y + 1) >> 1) - partitionX;
    
      const maxX =
        partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
      const maxY =
        partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
    
      const minX =
        partitionX === x ? Number.POSITIVE_INFINITY : nums1[partitionX];
      const minY =
        partitionY === y ? Number.POSITIVE_INFINITY : nums2[partitionY];
    
      if (maxX <= minY && maxY <= minX) {
        if ((x + y) & 1) {
          return Math.max(maxX, maxY);
        } else {
          return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
        }
      } else if (maxX > minY) {
        end = partitionX - 1;
      } else {
        start = partitionX + 1;
      }
    }
};

```