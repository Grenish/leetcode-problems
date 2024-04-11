/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
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
};
