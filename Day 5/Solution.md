# Solution

This can be solved using Dynamic Programming Approach.

> ### What is Dynamic Programming Approach?
>
> Dynamic Programming is a method of solving complex problems by breaking them down into simpler subproblems and solving each subproblem only once, storing the solutions to avoid redundant calculations. This approach is often used in optimization problems where the solution can be obtained by combining solutions to smaller subproblems. Dynamic Programming is particularly useful in situations where the problem can be divided into overlapping subproblems that can be solved independently. This approach is commonly used in computer science and mathematics to efficiently solve problems that would otherwise be computationally expensive.

## Explaination

```js
if (s.length < 2) {
    return s;
  }
```
The function begins by checking if the length of the input string s is less than 2. If it is, the function immediately returns the input string s because a string of length 1 or 0 is a palindrome by default.

```js
let start = 0;
let maxLen = 1;
const dp = Array(s.length)
  .fill(0)
  .map(() => Array(s.length).fill(false));
```
Next, the function initializes three variables: `start` to keep track of the starting index of the longest palindromic substring found, `maxLen` to keep track of the length of the longest palindromic substring found, and `dp`, a 2D array used for dynamic programming. The `dp` array is filled with <span style="color:yellow">*false*</span> values initially, and its dimensions are `s.length` by `s.length`.

```js
for (let i = 0; i < s.length; i++) {
  dp[i][i] = true;
  for (let j = 0; j < i; j++) {
    if (s[i] === s[j] && (i - j < 2 || dp[j + 1][i - 1])) {
      dp[j][i] = true;
    }
    if (dp[j][i] && maxLen < i - j + 1) {
      maxLen = i - j + 1;
      start = j;
    }
  }
}
```
The function then enters a nested loop structure to fill the `dp` array. The outer loop iterates over the string `s` from start to end. For each character, it sets `dp[i][i]` to <span style="color:yellow">*true*</span> because a single character is a palindrome.

```js
...
    if (s[i] === s[j] && (i - j < 2 || dp[j + 1][i - 1])) {
        dp[j][i] = true;
    }
...
```
The inner loop iterates from the start of the string to the current character. For each pair of characters, it checks if they are the same and if the substring between them is a palindrome. If both conditions are met, it sets `dp[j][i]` to <span style="color:yellow">*true*</span>.

```js
...
    if (dp[j][i] && maxLen < i - j + 1) {
        maxLen = i - j + 1;
        start = j;
     }
...
```
After updating `dp[j][i]`, it checks if the current palindromic substring is longer than the longest found so far. If it is, it updates `start` and `maxLen` with the current indices and length.

```js
    return s.substring(start, start + maxLen);
```
Finally, after filling the `dp` array, the function returns the longest palindromic <span style="color:yellow">*substring*</span> by using the substring method on s with the indices <span style="color:yellow">*start and start + maxLen*</span>.

## Final

```js
function palindrome(s) {
  if (s.length < 2) {
    return s;
  }
  let start = 0;
  let maxLen = 1;
  const dp = Array(s.length)
    .fill(0)
    .map(() => Array(s.length).fill(false));
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    for (let j = 0; j < i; j++) {
      if (s[i] === s[j] && (i - j < 2 || dp[j + 1][i - 1])) {
        dp[j][i] = true;
      }
      if (dp[j][i] && maxLen < i - j + 1) {
        maxLen = i - j + 1;
        start = j;
      }
    }
  }
  return s.substring(start, start + maxLen);
}
```

## Testcase

**Input:** s = "cbbd"

**Output:** "bb"


**Input:** s = "a"

**Output:** "a"


**Input:** s = "ac"

**Output:** "a"