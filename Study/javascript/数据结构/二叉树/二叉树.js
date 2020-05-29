function Node(data, left, right) {
  this.data = data
  this.left = left
  this.right = right
  this.show = show
}

function show() {
  return this.data
}
//创建二叉查找树，并且写入插入功能insert
function BST() {
  this.root = null
  this.insert = insert
  this.inOrder = inOrder //升序遍历
  this.getMin = getMin
  this.getMax = getMax
  this.find = find
  //以下两个都是删除节点函数
  this.removeNode = removeNode
  this.remove = remove
}

function insert(data) {
  var n = new Node(data, null, null)
  if (this.root == null) {
    this.root = n
  } else {
    var current = this.root
    var parent
    while (1) {
      parent = current
      if (data < current.data) {
        current = current.left
        if (current == null) {
          parent.left = n
          break
        }
      } else {
        current = current.right
        if (current == null) {
          parent.right = n
          break
        }
      }
    }
  }
}
//遍历二叉查找树--有三种遍历BST方式(中序，先序，后序)
//中序遍历按照节点上的键值，以升序访问BST上所有节点。
//先序遍历先访问根节点，然后以相同方式访问左子树和右子树。
//后序遍历先访问叶子节点，从左子树到右子树，再到根节点
function inOrder(node) {
  //--中序遍历
  if (node != null) {
    inOrder(node.left)
    console.log(node.show())
    inOrder(node.right)
  }
}
var nums = new BST()
nums.insert(23),
nums.insert(45),
    nums.insert(16),
  nums.insert(37),
  nums.insert(3),
  nums.insert(99),
  nums.insert(55),
  nums.insert(12)
//console.log("Inorder traversal: ")
//inOrder(nums.root)
//查找最小值
function getMin() {
  var current = this.root //先定位到根节点
  while (!(current.left == null)) {
    current = current.left
  }
  return current.data
}
//查找最大值
function getMax() {
  var current = this.root
  while (!(current.right == null)) {
    current = current.right
  }
  return current.data
}
//console.log('The minimum  value of the BST is :' + '\n' + nums.getMin())
//console.log('The maximum  value of the BST is :' + '\n' + nums.getMax())
//查找给定值--
function find(params) {
  var current = this.root
  while (current != null) {
    if (params == current.data) return current
    if (params < current.data) {
      current = current.left
    } else {
      current = current.right
    }
  }
  return null
}
//console.log(nums.find(3))
//!删除节点--较复杂
function remove(data) {
  root = removeNode(this.root, data)
}
function removeNode(node, data) {
  if (node == null) {
    return null
  }
  if ((data = node.data)) {
    //没有子节点的节点
    if (node.left == null && node.right == null) {
      return null
    }
    //没有左子节点的节点
    if (node.left == null) {
      return node.right
    }
    //没有右子节点的节点
    if (node.right == null) {
      return node.left
    }
    //有两个子节点的节点
    var tempNode = getSmallest(node.right)
    node.data = tempNode.data
    node.right = removeNode(node.right, tempNode.data)
    return node
  } else if (data < node.data) {
    node.left = removeNode(node.left, data)
    return node
  } else {
    node.right = removeNode(node.right, data)
    return node
  }
}
