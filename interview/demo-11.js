// 匹配一个包含(){}的字符串，是否对称
// 输入：包含(){}的字符串；
// 输出：true or false
// (){()} : 对称,true
// (({}: 不对称，false
// ({)}: 不对称，false

function isMatch(str) {
  var map = {
    '{': '}',
    '(': ')',
  }
  var leftChars = Object.keys(map);
  var rightChars = Object.values(map);

  var stack = [];

  while(str.length) {
    // 第一个字符
    var firstChar = str.substring(0, 1);
    // 剩余字符，重新赋值
    str = str.substring(1);

    // 如果是左括弧，压栈
    if (leftChars.includes(firstChar)) {
      stack.push(firstChar);
    }
    // 如果是右括弧，比较
    else if (rightChars.includes(firstChar)) {
      if (!stack.length) return false;

      var left = stack.pop();

      if (map[left] !== firstChar) {
        return false;
      }
    }
  }

  return !stack.length;
}

console.log(isMatch('(){()}')); // true
console.log(isMatch('(({}')); // false
console.log(isMatch('({)}')); // false
console.log(isMatch('{}({({{}})}){()}')); // true


function isMatch2(str) {
  do {
    str = str.replace("()", "").replace("[]", "").replace("{}", "");
  } while(str.includes("()") || str.includes("[]") || str.includes("{}"));
  return !str;
}

console.log(isMatch2('(){()}')); // true
console.log(isMatch2('(({}')); // false
console.log(isMatch2('({)}')); // false
console.log(isMatch2('{}({({{}})}){()}')); // true

var arr = [
  {permissionId: 1, permissionName: "使用手机摄像头", open: true},
  {permissionId: 5, permissionName: "允许手机拨号", open: true},
  {permissionId: 16, permissionName: "允许百应CRM拨号", open: true},
  {permissionId: 18, permissionName: "允许来电弹屏", open: true},
]

var sort = [5, 18, 1, 16];
arr.sort((a, b) => sort.indexOf(a.permissionId) - sort.indexOf(b.permissionId))
console.log(arr)
