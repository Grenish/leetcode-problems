# Solution

### Hash Table

We can utilize a hash table called `seen` to store the array value along with its corresponding index.

Iterate through the array `nums`, if `target - nums[i]` is found in the hash table, it indicates that the target value has been located, and the indices of `target - nums[i]` and `i` are returned.