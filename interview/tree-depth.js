// 二叉树深度 - 方法一
function BinaryTreeDepth(node) {
  if (!node) return 0;
  var leftDepth = BinaryTreeDepth(node.left);
  var rightDepth = BinaryTreeDepth(node.right);
  return Math.max(leftDepth, rightDepth) + 1;
}

// 二叉树深度 - 方法二
function BinaryTreeDepth2(node) {
  let stack = [node];
  let levels = 0;
  while (stack.length) {
    levels++;
    let len = stack.length;
    for (let i = 0; i < len; i++) {
      let n = stack.shift();
      if (n.left) {
        stack.push(n.left);
      }
      if (n.right) {
        stack.push(n.right);
      }
    }
  }
  return levels;
}

var node = {
  val: 0,
  left: {
    val: 1,
    left: {
      val: 2,
    },
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
          left: {
            val: 9,
            right: {
              val: 10,
            },
          },
        },
      },
    },
  },
};

console.log(BinaryTreeDepth(node));
console.log(BinaryTreeDepth2(node));
