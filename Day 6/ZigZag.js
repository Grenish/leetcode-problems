/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
  
    let len = s.length;
    let cycleLen = 2 * numRows - 2;
    let arr = [];
  
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j + i < len; j += cycleLen) {
        arr.push(s[j + i]);
        if (i != 0 && i != numRows - 1 && j + cycleLen - i < len) {
          arr.push(s[j + cycleLen - i]);
        }
      }
    }
  
    return arr.join("");
  };