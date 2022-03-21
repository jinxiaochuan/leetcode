// 给定一个数字数组，找到数组每个值后面第一个大于的它自身的元素，如果没找到，设为-1。最后返回一个包含所有找到的值的新数组

// 示例

// 输入：[1, 5, 8, 7, 2, 9, 2]

// 输出：[5, 8, 9, 9, 9, -1, -1]

// 时间复杂度O(N)

function fn(array) {
  var result= [];
  var index = 1;
  // 定义一个栈，存储索引
  var stack = [0];
  var len = array.length;
  while (index < len) {
    // 获取栈最顶部的索引
    var top = stack[stack.length - 1];
   if (!!stack.length && array[index] > array[top]) {
      result[stack.pop()] = array[index];
   } else {
    stack.push(index);
    index++;
   }
  }
  while(stack.length) {
    result[stack.pop()] = -1;
  }
  return result;
}

console.log(fn([1, 5, 8, 7, 2, 9, 2]))
console.log(fn([8, 2, 5, 4, 3, 9, 7, 2, 5]))
