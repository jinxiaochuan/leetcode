/**
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。
 * 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
 */

 /**
  * 示例
  * 输入：nums1 = [1,3], nums2 = [2]
  * 输出：2.00000
  * 解释：合并数组 = [1,2,3] ，中位数 2
  */

var findMedianSortedArrays = function(nums1, nums2) {
  var res = [];
  var len1 = nums1.length;
  var len2 = nums2.length;
  var i = 0;
  var i1 = 0;
  var i2 = 0;
  var middle = 0;
  while (i1 < len1 && i2 < len2) {
    res[i++] = nums1[i1] < nums2[i2] ? nums1[i1++] : nums2[i2++]
  }

  if (i1 < len1) {
    res = res.concat(nums1.slice(i1))
  }

  if (i2 < len2) {
    res = res.concat(nums2.slice(i2))
  }

  if  ((len1 + len2) % 2 === 0) {
    middle = (res[(len1 + len2) / 2 -1] + res[(len1 + len2)/ 2])/2;
  } else {
    middle =res[Math.floor((len1 + len2)/ 2)];
  }

  return middle;
};

var nums1 = [1,3], nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2))
