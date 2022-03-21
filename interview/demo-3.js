/**
 * 给你两个有序整数数组 nums1 和 nums2，请你合并num1和nums2，返回一个有序数组。
 * 说明:
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 不能使用sort
 * 示例:
 * 输入:
 * var nums1 = [1,2,3,7], m = 4;
 * var nums2 = [2,5,6], n = 3;
 * 输出: [1,2,2,3,5,6,7]
 */

function merge (nums1, m, nums2, n) {
  var res = [];
  var i1 = 0;
  var i2 = 0;
  var i = 0;

  while (i1 < m && i2 < n) {
    res[i++] = nums1[i1] < nums2[i2] ? nums1[i1++] : nums2[i2++];
  }

  if (i1 < m) {
    res = res.concat(nums1.slice(i1))
  }

  if (i2 < n) {
    res = res.concat(nums2.slice(i2))
  }

  return res;
 }

 var nums1 = [0,1,2,3,7], m = 4;
 var nums2 = [2,5,6], n = 3;
 console.log(merge(nums1, m, nums2, n))
