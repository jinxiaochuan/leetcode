// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
// 你可以认为每种硬币的数量是无限的。

// 链接：https://leetcode-cn.com/problems/coin-change


// 输入：coins = [1, 2, 5], amount = 11
// 输出：3
// 解释：11 = 5 + 5 + 1

// 输入：coins = [2], amount = 3
// 输出：-1

// f(n) 表示组合为n的最少硬币数
// 以coins = [1, 2, 5] 为例
// f(0) = 0;
// f(1) = Math.min(f(1-1) + 1, f(1-2) + 1, f(1-5) + 1)
// f(2) = Math.min(f(2-1) + 1, f(2-2) + 1, f(2-5) + 1)

function fn (coins, amount) {
  var map = new Map();
  for (var i = 0; i <= amount; i++) {
    map.set(i, Math.min(...coins.map(item => (((i - item <= 0) ? 0 : map.get(i - item))))) + 1)
  }
  console.log({map})
  return map.get(amount) > amount ? -1 : map.get(amount);
}

console.log(fn([1, 2, 5], 11))
console.log(fn([2], 3))
