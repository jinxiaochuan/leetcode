async function async1() {
  console.log('a')
  await async2() // 微1
  console.log('b')
}
async function async2() {
  console.log('c')
}
console.log('d')
setTimeout(function () {
  console.log('e') // 宏1
}, 0)
async1()
new Promise(function (resolve) {
  console.log('f')
  resolve()
}).then(function () {
  console.log('g') // 微2
})
console.log('h')


// d
// a
// c
// f
// h
// b
// g
// e