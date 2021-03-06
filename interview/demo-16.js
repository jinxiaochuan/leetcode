const a = [1, 2, 3, 4, 5];

const b = { a: 'aa', b: 'bb', c: 'cc' };

const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const i = a[Symbol.iterator]();

let n = 0;
while (n < a.length) {
  const v = i.next();
  if (v.done) {
    break;
  }
  n++;
}

for (let key1 in a) {
  console.log(key1); // 0, 1, 2, 3, 4
}

for (let key2 of a) {
  console.log(key2); // 1, 2, 3, 4, 5
}

for (let key3 in b) {
  console.log(key3); // a, b, c
}

// for (let key4 of b) {
//   console.log(key4); // 报错
// }

for (let key5 of map) {
  console.log(key5); // 报错
}

function mapToObj(map) {
  let obj = Object.create(null);
  for (let [k, v] of map) {
    obj[k] = v;
  }
  return obj;
}

console.log(mapToObj(map));

function objToMap(obj) {
  return new Map(Object.entries(obj));
}

console.log(objToMap(mapToObj(map)));
