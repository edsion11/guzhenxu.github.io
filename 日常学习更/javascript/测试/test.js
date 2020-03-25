//2.给定一个二叉搜索树的根结点 root, 返回树中任意两节点的差的最小值。

/**
* root = [4,2,6,1,3,null,null]

4
/ \
2 6
/ \
1 3


interface Node {
left: Node;
right: Node;
value: number;
}
*
*/
//root = [4, 2, 6, 1, 3, null, null]
function sort(root, arr) {
  if (root != null) { //全部压入栈
    minDiffValue(root.left)
    arr.push(root.left.value)
    minDiffValue(root.right)
  }
}
var minDiffValue = function (root) {
  var arr = []
  // 请实现
  sort(rooter, arr)
  var min = Math.abs(arr[1] - arr[0])
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length - i; j++) {
      if (Math.abs(arr[j] - arr[i]) < min)
        min = Math.abs(arr[j] - arr[i])
    }
  }
  return min
}
console.log(minDiffValue)