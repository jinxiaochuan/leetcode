// 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

// 有效的 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效的 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效的 IP 地址。

// 输入：s = "25525511135"
// 输出：["255.255.11.135","255.255.111.35"]

/**
 * @param {string} s
 * @return {string[]}
 */

function validNumStr(numStr) {
  return Number(numStr) > 0 && Number(numStr) <= 255;
}

var restoreIpAddresses = function(s) {
  const PART_NUM = 4;
  var res = [];
  var partList = [];
  
  function recursion(s, partIndex, startIndex) {
      if (partIndex === PART_NUM) {
          if (startIndex === s.length) {
             res.push(partList.join('.')) 
          }
          return;
      }
      
      if (startIndex === s.length) {
          return;
      }
      
      if (s.charAt(startIndex) === '0') {
          console.log(JSON.stringify(partList))
          partList[partIndex] = '0';
          recursion(s, partIndex + 1, startIndex + 1);
      }
      
      for (var i = startIndex; i < s.length; i++) {
        var numStr = s.substring(startIndex, i + 1);
        if (validNumStr(numStr)) {
          partList[partIndex] = numStr;
          recursion(s, partIndex + 1, i + 1)
        } else {
          break;
        }
      }
  }
  
  recursion(s, 0, 0);
  
  return res;
};

var string = "25525511135";
console.log(restoreIpAddresses(string));
console.log(restoreIpAddresses('0000'));