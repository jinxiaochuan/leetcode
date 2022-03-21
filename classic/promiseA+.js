const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function Promise(executor) {
  var _this = this;
  // 状态
  this.state = PENDING;
  // 终值
  this.value = undefined;
  // 异常
  this.reason = undefined;
  // 成功回调
  this.onFulfilled = [];
  // 失败回调
  this.onRejected = [];

  function resolve(value) {
    if (_this.state === PENDING) {
      _this.state = FULFILLED;
      _this.value = value;
      _this.onFulfilled.forEach((fn) => fn(value));
    }
  }
  function reject(reason) {
    if (_this.state === PENDING) {
      _this.state = REJECTED;
      _this.reason = reason;
      _this.onRejected.forEach((fn) => fn(reason));
    }
  }

  executor(resolve, reject);
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  var _this = this;
  // 不管onFulfilled和onRejected传什么值，只要不是函数，就继续向下传入
  onFulfilled =
    typeof onFulfilled === "function" ? onFulfilled : (value) => value;

  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (reason) => {
          throw reason;
        };

  function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      reject(new TypeError("Chaining cycle"));
    }

    if (x && (typeof x === "object" || typeof x === "function")) {
      let then = x.then;

      if (typeof then === "function") {
        then.call(
          x,
          (value) => {
            resolvePromise(promise2, value, resolve, reject);
          },
          (reason) => {
            reject(reason);
          }
        );
      } else {
        resolve(x);
      }
    } else {
      resolve(x);
    }
  }

  var promise2 = new Promise((resolve, reject) => {
    if (_this.state === FULFILLED) {
      setTimeout(() => {
        let x = onFulfilled(_this.value);
        resolvePromise(promise2, x, resolve, reject);
      });
    }

    if (_this.state === REJECTED) {
      setTimeout(() => {
        let x = onRejected(_this.reason);
        resolvePromise(promise2, x, resolve, reject);
      });
    }

    if (_this.state === PENDING) {
      _this.onFulfilled.push(() => {
        setTimeout(() => {
          let x = onFulfilled(_this.value);
          resolvePromise(promise2, x, resolve, reject);
        });
      });
      _this.onRejected.push(() => {
        setTimeout(() => {
          let x = onRejected(_this.reason);
          resolvePromise(promise2, x, resolve, reject);
        });
      });
    }
  });

  return promise2;
};

var p = new Promise(function (resolve, reject) {
  console.log("执行");
  setTimeout(function () {
    resolve(2);
  }, 1000);
});
p.then(
  function (res) {
    console.log("suc", res);
  },
  function (err) {
    console.log("err", err);
  }
);
