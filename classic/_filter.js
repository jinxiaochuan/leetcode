const res1 = [1, 2, 3].filter(
  (item, index) => {
    return item + this.limit;
  },
  { limit: 1 }
);

console.log("res1", res1);

const res2 = [1, 2, 3].filter(
  function (item, index) {
    return item + this.limit;
  },
  { limit: 1 }
);

console.log("res2", res2);

// reduce实现filter
Array.prototype._filter = function (cb, context) {
  return this.reduce((pre, cur, idx, arr) => {
    return cb.bind(context)(cur, idx, arr) ? [...pre, cur] : pre;
  }, []);
};

const res3 = [1, 2, 3]._filter(
  (item, index) => {
    return item + this.limit;
  },
  { limit: 1 }
);

console.log("res3", res3);

const res4 = [1, 2, 3]._filter(
  function (item, index) {
    return item + this.limit;
  },
  { limit: 1 }
);

console.log("res4", res4);
