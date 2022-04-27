// 写一个函数，将foo1这种形式的对象转成foo2形式​

const foo1 = {
  A: 1,
  'B.A': 2,
  'B.B': 4,
  'CC.D.E': 3,
  'CC.D.F': 5,
  'CC.D.G.H.I': 5,
};

const foo2 = {
  A: 1,
  B: { A: 2, B: 4 },
  CC: { D: { E: 3, F: 5, G: { H: { I: 5 } } } },
};

function set(obj, keys, value) {
  const ks = keys.split('.');

  let tail = obj;
  let i = 0;

  while (i < ks.length) {
    const cur = ks[i];

    if (i + 1 === ks.length) {
      tail[cur] = value;
      if (i > 0) {
        delete obj[keys];
      }
      return;
    }

    if (!tail[cur]) {
      tail[cur] = {};
    }

    tail = tail[cur];
    i++;
  }
}

function fn(obj) {
  for (const keys in obj) {
    set(obj, keys, obj[keys]);
  }
  return obj;
}

console.log(JSON.stringify(fn(foo1)));
