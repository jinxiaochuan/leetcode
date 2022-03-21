/**
 * 5. 最长回文子串
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 */

// dp[i][j] - 表示s从i-j是否为回文子串
// dp[i+][j-1]为true && s[i] === s[j] => dp[i][j]为true
//  i===j || j-i===1 => dp[i][j]为true

/**
 * @param {string} s
 */
function longestPalindrome(s) {
  if (s == null || s.length < 2) {
    return s;
  }
  let maxStart = 0; //最长回文串的起点
  let maxLen = 1; //最长回文串的长度

  const len = s.length;
  const dp = Array.from({ length: len }).map(() => Array.from({ length: len }));

  for (let r = 1; r < len; r++) {
    for (let l = 0; l < r; l++) {
      if (s.charAt(l) !== s.charAt(r)) {
        dp[l][r] = false;
      } else {
        if (r - l < 3) {
          dp[l][r] = true;
        } else {
          dp[l][r] = dp[l + 1][r - 1];
        }
      }
      if (dp[l][r] && r - l + 1 > maxLen) {
        maxLen = r - l + 1;
        maxStart = l;
      }
    }
  }

  return s.substring(maxStart, maxStart + maxLen);
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("aacabdkacaa"));
console.log(longestPalindrome("abcba"));
