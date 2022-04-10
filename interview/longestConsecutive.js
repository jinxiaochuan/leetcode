// https://leetcode-cn.com/problems/longest-consecutive-sequence/solution/zui-chang-lian-xu-xu-lie-by-leetcode-solution/

var longestConsecutive = function(nums) {
  let num_set = new Set();
  for (const num of nums) {
      num_set.add(num);
  }

  let longestStreak = 0;

  for (const num of num_set) {
    // 我们考虑枚举数组中的每个数 xx，考虑以其为起点，不断尝试匹配 x+1, x+2, ⋯ 是否存在，假设最长匹配到了 x+y，那么以 x 为起点的最长连续序列即为 x, x+1, x+2, ⋯, x+y，其长度为 y+1，我们不断枚举并更新答案即可。
    // 关键是首先找出不存在x-1的树，才有继续遍历的意义（前提都是要实现构建好哈希表-Set）
    if (!num_set.has(num - 1)) {
        let currentNum = num;
        let currentStreak = 1;

        while (num_set.has(currentNum + 1)) {
            currentNum += 1;
            currentStreak += 1;
        }

        longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};

const nums = [100,4,200,1,3,2];
console.log(longestConsecutive(nums));
