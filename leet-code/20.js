// 20. 有效的括号

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  var i = 0;

  var stack = [s[i]];
  while (stack.length || i < s.length - 1) {
    var next = s[++i];
    if (!next) return false;
    if (Object.keys(map).includes(next)) {
      stack.push(next);
    } else {
      const last = stack.pop();
      if (map[last] === next) {
        continue;
      }
      return false;
    }
  }
  return true;
};

console.log(isValid('()[]{}')); // true
console.log(isValid('{[]}')); // true
console.log(isValid(']')); // false
console.log(isValid('(){}}{')); // false
console.log(isValid('()')); // true
