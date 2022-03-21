console.log(1);

setTimeout(() => {
  console.log(2); // 宏1
});

Promise.resolve().then(() => {
  console.log(3); // 微1
});

setTimeout(() => {
  console.log(4); // 宏2
});

new Promise(resolve => {
  console.log(5);
  resolve();
  console.log(6);
}).then(() => {
  console.log(7); // 微2
});

Promise.resolve().then(() => {
  console.log(8); //  微3
  Promise.resolve().then(() => {
    console.log(9); // 微4
  });
});

// 1
// 5
// 6
// 3
// 7
// 8
// 9
// 2
// 4
