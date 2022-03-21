// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 示例:
// 输入: [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

function maxSubArray(nums) {
  var max = nums[0];
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    // 当之前的sum小于0，说明有最大和的连续子数组的起点从当前i开始
    sum = sum <= 0 ? nums[i] : sum + nums[i];
    // console.log(sum);
    max = Math.max(max, sum);
  }
  return max;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1,2]))
console.log(maxSubArray([-1,-2]))
