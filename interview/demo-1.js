function MainFn(arr) {
  function Fn(arr1, arr2) {
    if (!arr1.length) return arr2;
    var res = [];
    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        res.push(`${arr1[i]}${arr2[j]}`);
      }
    }
    return res;
  }

  var res = arr[0];
  var i = 1;
  while(i < arr.length) {
    res = Fn(res, arr[i]);
    i++;
  }
  return res;
}

function MainFn2(arr) {
  function Fn(arr1, arr2) {
    if (!arr1.length) return arr2;
    var res = [];

    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        res.push(`${arr1[i]}${arr2[j]}`);
      }
    }
    return res;
  }

  return arr.reduce((acc, cur) => {
    return Fn(acc, cur);
  }, [])
}


const arr = [['a', 'b'], ['n', 'm'], ['0', '1']]

console.log(MainFn(arr));
console.log(MainFn2(arr));

const a = [1, 2, 3, 4, 5]
var b = a.reduce((acc, cur) => acc + cur, 0)
console.log(b)
