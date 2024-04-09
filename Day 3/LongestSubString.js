/**
 * @param {string} s
 * @return {number}
 */
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