// 二叉树广度遍历
function BinaryTreeBFS (node) {
  var res = [];
  var stack = [node];
  while(stack.length) {
    var topNode = stack.shift();
    res.push(topNode.val);
    if (topNode.left) {
      stack.push(topNode.left);
    }
    if (topNode.right) {
      stack.push(topNode.right);
    }
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

console.log(BinaryTreeBFS(node))