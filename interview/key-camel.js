let data = {
  user_name: 'name1',
  user_id: 1000,
  age: 10,
  detail: {
    user_avatar_url: 'xxx',
    object_one: {
      a_num: 1,
      str: 'str1',
    },
    array_one: [
      [
        {
          a_num: 111,
          b_num: 222,
        },
      ],
      [
        {
          c_obj: {
            c_num: 333,
            str: 'str111',
          },
        },
      ],
    ],
  },
};

function isObjectOrArray(o) {
  const typeStr = Object.prototype.toString.call(o);
  return typeStr === '[object Object]' || typeStr === '[object Array]';
}

function isObjectOrArray(o) {
  const typeStr = Object.prototype.toString.call(o);
  return typeStr === '[object Object]' || typeStr === '[object Array]';
}

function keyCamel(data) {
  let res = Array.isArray(data) ? [] : {};
  const keys = Object.keys(data);
  const reg = /_\w/g;

  for (const key of keys) {
    const k = key.replace(reg, (match) =>
      match.replace('_', '').toLocaleUpperCase()
    );
    const v = data[key];
    res[k] = isObjectOrArray(v) ? keyCamel(v) : data[key];
  }

  return res;
}

console.log(keyCamel(data));
