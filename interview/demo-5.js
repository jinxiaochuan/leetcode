// 给你六种面额1、5、10、20、50、100元的纸币，假设每种币值的数量都足够多，编写程序求组成N元（N为0-10000的非负整数）的不同组合的个数。
// A(m, n) 表示用最大不超过n的值去组合为m
// B(m, n) 表示使用n（至少一个）去组合为m,换句话说 B(m, n) === A(m - n, n)
// 即 A(m, n) = B(m, n) + A(m, 比n小的值) => A(1000, 100) = B(1000, 100) + A(1000, 50) = A(1000 - 100, 100) + A(1000, 50)

function f(n) {
  if (n <= 0) return 0;
  if (n < 5) return 1;
  var arr = [1, 5, 10, 20, 50, 100];
  var map = new Map();
  for (var i = 0; i <= n; i++) {
    // 存储一份临界值，即用最大为1去组合i
    map.set(i, 1);
  }

  for (var j = 1; j < arr.length; j++) {
    for (var k = 1; k <= n; k++) {
      if (k >= arr[j]) {
        map.set(k, map.get(k - arr[j]) + map.get(k))
      }
    }
  }
  return map.get(n);
}

console.log('f(6)------>' ,f(6))
console.log('f(100)---->' ,f(100))
console.log('f(200)---->' ,f(200))
console.log('f(1000)---->' ,f(1000))
