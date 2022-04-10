var arr = [
  {
    id: 1,
    pid: 0,
    name: 'body',
  },
  {
    id: 2,
    pid: 1,
    name: 'title',
  },
  {
    id: 3,
    pid: 2,
    name: 'div',
  },
  {
    id: 4,
    pid: 0,
    name: 'div',
  },
  {
    id: 9,
    pid: 4,
    name: 'div',
  },
];

function arr2tree(arr) {
  var root = {
    id: 0,
    children: [],
  };

  function insetNode(node, root) {
    if (node.pid === root.id) {
      root.children = root.children ? [...root.children, node] : [node];
    } else {
      (root.children || []).forEach((item) => {
        insetNode(node, item);
      });
    }
  }

  arr.forEach((item) => insetNode(item, root));

  return root.children;
}

console.log(JSON.stringify(arr2tree(arr)));
