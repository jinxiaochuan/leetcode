// 二叉树深度
function BinaryTreeDepth(node) {
  if (!node) return 0;
  var leftDepth = BinaryTreeDepth(node.left);
  var rightDepth = BinaryTreeDepth(node.right);
  return Math.max(leftDepth, rightDepth) + 1;
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

console.log(BinaryTreeDepth(node))