// 322. 零钱兑换

// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

// 你可以认为每种硬币的数量是无限的。

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!amount) return 0;
  var map = new Map();
  for (let i = 0; i <= amount; i++) {
    var s = coins
      .filter((c) => c <= i)
      .map((c) => (c === i ? 1 : map.get(i - c) + 1));
    map.set(i, Math.min(...s));
  }
  return map.get(amount) === Infinity ? -1 : map.get(amount);
};

var coinChange2 = function (coins, amount) {
  // dp[i] 表示用coins去凑成amount所需要的最少硬币个数
  // dp[i] = Math.min(...(dp[amount - coins[i]] + 1));
  // 边界条件 dp[0] = 0;

  let map = new Map();
  map.set(0, 0);

  for (let i = 1; i <= amount; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      if (i >= coin && map.has(i - coin)) {
        min = Math.min(map.get(i - coin) + 1, min);
      }
    }
    map.set(i, min);
  }

  return map.get(amount) === Number.MAX_SAFE_INTEGER ? -1 : map.get(amount);
};

(coins = [1, 2, 5]), (amount = 11);
console.log(coinChange(coins, amount));
console.log(coinChange2(coins, amount));
