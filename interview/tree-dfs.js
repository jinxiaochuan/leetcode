// 二叉树广度遍历
function BinaryTreeDFS(node) {
  if (!node) return [];
  
  var res = [];
  res.push(node.val);

  if (node.left) {
    res = res.concat(BinaryTreeDFS(node.left));
  }

  if (node.right) {
    res = res.concat(BinaryTreeDFS(node.right));
  }

  return res;
}

var node = {
  val: 0,
  left: {
    val: 1,
    left: {
      val: 2,
    }
  },
  right: {
    val: 3,
    left: {
      val: 4,
    },
    right: {
      val: 5,
      left: {
        val: 6,
      },
      right: {
        val: 7,
        left: {
          val: 8,
        }
      }
    }
  }
}

console.log(BinaryTreeDFS(node))