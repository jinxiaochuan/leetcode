// 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。
// 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

// 输入：s = "bbbab"
// 输出：4
// 解释：一个可能的最长回文子序列为 "bbbb" 。

var longestPalindromeSubseq = function (s) {
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1;
    const c1 = s[i];
    console.log('i', i);
    for (let j = i + 1; j < n; j++) {
      console.log('j', j);
      const c2 = s[j];
      if (c1 === c2) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][n - 1];
};

s = 'bbbab';
console.log(longestPalindromeSubseq(s));
