/**
 * 将10进制数字转化为26进制用A-Z来表示
 * ABZ = 1*26² + 2 * 26¹ + 26*26°= 676 + 52 + 26 = 754
 */

/**
 *
 * @param {number} num
 * @return {string}
 */

function ToNumberSystem26(num) {
  // A字符串
  const A_CODE = "A".charCodeAt();
  let res = [];
  while (num > 0) {
    let m = num % 26;
    // 当可被26整除时，须将m转为26，使其转为Z
    if (m === 0) m = 26;
    num = (num - m) / 26;
    res.unshift(String.fromCharCode(A_CODE + m - 1));
  }

  return res.join("");
}

console.log(ToNumberSystem26(27));
console.log(ToNumberSystem26(754));
console.log(ToNumberSystem26(702));
console.log(ToNumberSystem26(703));


/**
 * 
 * @param {*} num 十进制数
 * @param {*} binary 进制（10以内）
 * @returns 
 */
function BinaryConversion(num, binary) {
  const res = [];
  while(num > 0) {
    let m = num % binary;
    num = (num - m) / binary;
    res.unshift(m);
  }

  return res.join('')
}

console.log(BinaryConversion(10, 2));