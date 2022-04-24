// [1, 2, 5] => 5
// dp[n] = dp[n - 1] + dp[n - 2] + dp[n - 5];

var change = function (amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = dp[i] + dp[i - coin];
    }
  }

  return dp[amount];
};
(amount = 5), (coins = [1, 2, 5]);
console.log(change(amount, coins));
