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

function dfs(node, process) {
  if (node == null) {
    return;
  }

  process && process(node.value);

  dfs(node.left, process);
  dfs(node.right, process);
}

dfs(node, console.log);