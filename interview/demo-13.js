var reverseWords = function(s) {
  const d = s.match(/[\S]+/g);
  console.log(d)
  return d.reverse().join(" ")
  
};

console.log(reverseWords("thE !s@\nky  ! is blue"))