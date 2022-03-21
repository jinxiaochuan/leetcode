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
      left: {
        value: 10,
      },
    },
  },
};

function bfs(node, process) {
  if (node == null) {
    return;
  }

  const stack = [node];

  while(stack.length) {
    const node = stack.shift();
    process && process(node.value);
   
    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }
}

bfs(node, console.log);
