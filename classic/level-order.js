const node = {
  value: 0,
  left: {
    value: 1,
    left: {
      value: 3,
      left: {
        value: 7,
      },
      right: {
        value: 8,
      },
    },
    right: {
      value: 4,
      right: {
        value: 9,
      },
    },
  },
  right: {
    value: 2,
    left: {
      value: 5,
    },
    right: {
      value: 6,
    },
  },
};

var levelOrder = function (root) {
  if (!root) return [];
  let stack = [root];
  let res = [];

  while (stack.length) {
    let len = stack.length;
    res.push([]);

    for (let i = 0; i < len; i++) {
      const n = stack.shift();
      res[res.length - 1].push(n.value);

      if (n.left) {
        stack.push(n.left);
      }

      if (n.right) {
        stack.push(n.right);
      }
    }
  }

  return res;
};

console.log(levelOrder(node));
