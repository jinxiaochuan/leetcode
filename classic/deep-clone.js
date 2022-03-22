const isType = ["Object", "Array", "Function", "RegExp", "Date", "Null"].reduce(
  (pre, item) => {
    return {
      ...pre,
      [`is${item}`]: function (data) {
        return Object.prototype.toString.call(data).slice(8, -1) === item;
      },
    };
  },
  {}
);

function deepClone(data) {
  if (isType.isArray(data)) {
    // 数组
    return data.map((item) => deepClone(item));
  } else if (isType.isObject(data)) {
    // 对象
    return Object.keys(data).reduce((pre, cur) => {
      return {
        ...pre,
        [cur]: deepClone(data[cur]),
      };
    }, {});
  } else if (isType.isDate(data)) {
    // Date
    return new Date(data);
  } else if (isType.isFunction(data)) {
    // 函数
    return function () {
      data.call(this, ...arguments);
    };
  } else if (isType.isRegExp(data)) {
    // 正则
    return new RegExp(data.source, data.flags);
  } else {
    return data;
  }
}

var objects = [{ a: 1 }, undefined, null, Date.now, /^1$/g];
var cloneObjects = deepClone(objects);
console.log(
  { objects, cloneObjects },
  objects[0] === cloneObjects[0],
  objects[1] === cloneObjects[1],
  objects[2] === cloneObjects[2],
  objects[3] === cloneObjects[3],
  objects[4] === cloneObjects[4],
  objects[5] === cloneObjects[5]
);
