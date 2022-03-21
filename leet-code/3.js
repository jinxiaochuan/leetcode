/**
 * 3. 无重复字符的最长子串
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 */

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let pointer = 0;
  let set = new Set();
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      set.delete(s.charAt(i - 1));
    }

    while (pointer < s.length && !set.has(s.charAt(pointer))) {
      set.add(s.charAt(pointer));
      pointer++;
    }

    max = Math.max(max, pointer - i);
  }

  return max;
}

let s1 = "abcabcbb";
console.log(lengthOfLongestSubstring(s1));

let s2 = "bbbbb";
console.log(lengthOfLongestSubstring(s2));

let s3 = "pwwkew";
console.log(lengthOfLongestSubstring(s3));
