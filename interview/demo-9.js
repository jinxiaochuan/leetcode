var arr = [1, [2, [3, 4], [5, [6, [7]]]]];

function flatFn2(arr) {
  return arr.reduce((pre, cur) => {
    return Array.isArray(cur) ? [...pre, ...flatFn2(cur)] : [...pre, cur]
  }, [])
 }

console.log(flatFn2(arr))
