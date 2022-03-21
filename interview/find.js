// function findOne(arr) {
//   const map = new Map();

//   function newN (key) {
//    if (!map.get(key)) {
//     map.set(key, {min: undefined, max: undefined});
//    }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     var key = arr[i];
//     for (let j = i + 1; j < arr.length; j ++) {
//       newN(key);
//       if (arr[i] + 1 === arr[j]) {
//         newN(arr[j]);
//         map.get(key).max = arr[j];
//         if (!map.get(arr[j])) {
//           map.set(arr[j], {});
//         }
//         map.get(arr[j]).min = key;
//       }
//       if (arr[i] - 1 === arr[j]) {
//         map.get(key).min = arr[j];
//         newN(arr[j]);
//         map.get(arr[j]).max = key;
//       }
//       if (map.get(key).min && map.get(key).max) continue;
//       if (j === arr.length - 1 && (!map.get(key).min || !map.get(key).max)) {
//         return map.get(key).min ? map.get(key).min + 2 : map.get(key).max - 2;
//       }
//     }
//   }
// }

// function findOne(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     var cur = arr[i];
//     let max2 = cur + 2;
//     let max1 = cur + 1;
//     let min2 = cur - 2;
//     let min1 = cur - 1;
//     if (arr.find(item => item === max2) && !arr.find(item => item === max1)) {
//       return max1;
//     }
//     if (arr.find(item => item === min2) && !arr.find(item => item === min1)) {
//       return min1;
//     }
//   }
// }


// var arr = [3,1,2,6,5,8,7,9];
// var arr2 = [4,3,1,2,5,8,7,9,10];
// console.log(findOne(arr));


var tree = {
  value: "-",
  left: {
      value: '+',
      left: {
          value: 'a',
      },
      right: {
          value: '*',
          left: {
              value: 'b',
          },
          right: {
              value: 'c',
          }
      }
  },
  right: {
      value: '/',
      left: {
          value: 'd',
      },
      right: {
          value: 'e',
      }
  }
}



// 广度遍历 - 采用栈方式
function bsT(rootNode) {
  var res = [];
  var stack = [rootNode];
  while (stack.length) {
    const node = stack.shift();
    res.push(node.value);
    if(node.left) {
      stack.push(node.left);
    }
    if(node.right) {
      stack.push(node.right);
    }
  }
  return res;
}

console.log('广度遍历:', bsT(tree))



// 深度遍历(先序 - 根、左、右) - 采用递归方式
function dfs(rootNode) {
  const res = [];

  function df (node) {
    if (node) {
      res.push(node.value);
      df(node.left)
      df(node.right)
    }
  }

  df(rootNode);
  return res;
}

console.log('深度遍历(先序 - 根、左、右):', dfs(tree))


// 深度遍历(中序 - 左、根、右) - 采用递归方式
function dfsM(rootNode) {
  const res = [];

  function df (node) {
    if (node) {
      df(node.left)
      res.push(node.value);
      df(node.right)
    }
  }

  df(rootNode);
  return res;
}

console.log('深度遍历(中序 - 左、根、右):', dfsM(tree))



// 深度遍历(后序 - 左、右、根) - 采用递归方式
function dfsPost(rootNode) {
  const res = [];

  function df (node) {
    if (node) {
      df(node.left)
      df(node.right)
      res.push(node.value);
    }
  }

  df(rootNode);
  return res;
}

console.log('深度遍历(后序 - 左、根、右):', dfsPost(tree))















