// 查找节点findNode
// 输入：树形json，节点id
// 输出：输出查找节点的路径
// 举例：id = 5，输出1 -> 3 -> 5

const node = {
    id: 1,
    children: [
        {
            id: 2,
            children: []
        },
        {
            id: 3,
            children: [
              {
                    id: 5,
                    children: []
              }
            ]
        },
        {
            id: 4,
            children: [
              {
                    id: 6,
                    children: []
              }
            ]
        },
    ]
}

function findNode(node, target) {

  function findRouter(node, target, route = []) {
    route.push(node);
    if (node.id === target) {
      return route.map(item => item.id).join(' -> ');
    };

    if (!node.children || !node.children.length) return;

    for (var i = 0; i < node.children.length; i++) {
      var n = findRouter(node.children[i], target, [...route]);
      if (n) {
        return n;
      }
    }
  }

  return findRouter(node, target);
}

console.log(findNode(node, 5)); // 1 -> 3 -> 5
