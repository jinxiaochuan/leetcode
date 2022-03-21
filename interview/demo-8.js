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

function getDepth(node) {
  if (!node) return 0;

  const left = getDepth(node.left);
  const right = getDepth(node.right);

  return (left > right ? left : right) + 1;
}

console.log(getDepth(node))
