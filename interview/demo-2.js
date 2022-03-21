function excel (num) {
  if (typeof num !== 'number') return;
  const mapStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function to (num) {
    let q = num % 26;
    let p = Math.floor(num / 26);
    if (q === 0) {
      q = 26;
      p = p - 1;
    }
    return `${p > 26 ? to(p) : mapStr[p - 1] || ''}${mapStr[q - 1] || ''}`;
  }

  return to(num);
}
// 1 ==> A
// 2 ==> B
// 26 ==> Z
// 27 ==> AA
// 28 ==> AB
// 52 ==> AZ
// 53 ==> BA
// 129 ==> DY
// 1000 ==> ALL
console.log(excel(1))
console.log(excel(2))
console.log(excel(26))
console.log(excel(27))
console.log(excel(28))
console.log(excel(52))
console.log(excel(53))
console.log(excel(129))
console.log(excel(1000))

