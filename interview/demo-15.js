// isContinuousLine(lines: [number, number][]): boolean[[0,1],[2,3]]=>false[[1,2],[0,1]]=>true[[10,50],[50,60],[60,100]]=>true[[1,3][2,4]]=>false

function isContinuousLine (lines) {
  var i = 1;
  lines.sort(function(a, b) {
    return a[0] - b[0]
  });
  var [, max] = lines[0];
  while(i < lines.length) {
    const [first, next] = lines[i++];
    if (max === first) {
      max = next;
    } else {
      return false;
    }
  }
  return true;
}

const a = [[0,1],[2,3],[4,5],[1,2],[3,4]];

console.log(isContinuousLine(a))