const arr = ['kobe', 'james', 'kobe', 'jim', 'wade', 'wade', 'kobe'];
const res = arr.reduce((acc, cur, index, arr) => {
  if (cur in acc) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});
console.log(res); // 输出：{ kobe: 3, james: 1, jim: 1, wade: 2 }

const arr2 = [3, 4, 9, 6, 10, 2];
const max = arr2.reduce((pre, cur) => pre + cur);
console.log(max); // 输出：34

Array.prototype._reduce = function (cb, initialValue) {
  if (!initialValue && !this[0]) {
    throw new Error('Reduce of empty array with no initial value');
  }
  const _this = this;
  const hasInitialValue = !!initialValue;
  let res = hasInitialValue ? initialValue : this[0];
  for (let i = hasInitialValue ? 0 : 1; i < _this.length; i++) {
    res = cb(res, _this[i], i, _this);
  }
  return res;
};

const res1 = arr._reduce((acc, cur) => {
  if (cur in acc) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});
console.log(res1); // 输出：{ kobe: 3, james: 1, jim: 1, wade: 2 }

const max2 = arr2._reduce((pre, cur) => pre + cur);
console.log(max2); // 输出：34
