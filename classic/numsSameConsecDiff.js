function numsSameConsecDiff(n, k) {
  const min = Math.pow(10, n - 1);
  const max = Math.pow(10, n) - 1;

  function match(num, k) {
    const list = num.toString().split("");
    for (let i = 1; i < list.length; i++) {
      if (Math.abs(list[i - 1] - list[i]) !== k) {
        return false;
      }
    }
    return true;
  }

  const res = [];
  for (let i = min; i <= max; i++) {
    if (match(i, k)) {
      res.push(i);
    }
  }

  return res;
}

console.log(numsSameConsecDiff(3, 7));
console.log(numsSameConsecDiff(2, 1));
console.log(numsSameConsecDiff(2, 0));
console.log(numsSameConsecDiff(2, 2));
console.log(numsSameConsecDiff(7, 5));
