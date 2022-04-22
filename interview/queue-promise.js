const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 3000);
});

async function queuePromise(promises) {
  for (let p of promises) {
    await p;
  }
}

function queuePromise1(promises) {
  function* gen() {
    for (let p of promises) {
      yield p;
    }
  }
  return new Promise((resolve, reject) => {
    const it = gen();
    let r;

    function step(ret) {
      if (!ret.done) {
        ret.value
          .then((res) => {
            r = res;
            step(it.next());
          })
          .catch(reject);
      } else {
        resolve(r);
      }
    }

    step(it.next());
  });
}

function queuePromise2() {}

queuePromise1([p1, p2, p3])
  .then((res) => {
    console.log('res', res);
  })
  .catch((err) => {
    console.log('err', err);
  });
