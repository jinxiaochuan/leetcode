const fs = require("fs");
const path = require("path");
fs.readFile(path.join(__dirname, "bfs.js"), "utf-8", (err, res) => {
  if (err) {
    throw err;
    return;
  }
  console.log(res);
});

function promisify(fn) {
  return function (...arg) {
    return new Promise((resolve, reject) => {
      fn.apply(null, [
        ...arg,
        (err, res) => {
          err ? reject(err) : resolve(res);
        },
      ]);
    });
  };
}

const promisifyReadFile = promisify(fs.readFile);

promisifyReadFile(path.join(__dirname, "bfs.js"), "utf-8")
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
