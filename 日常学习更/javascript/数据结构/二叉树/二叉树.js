function Node(data,left,right){
    this.data=data
    this.left=left
    this.right =right
    this.show=show
}
function show(){
    return this.data
}
//创建二叉查找树，并且写入插入功能insert
function BST(){
  this.root = null
  this.insert=insert
  this.inOrder=inOrder//升序遍历
}
function insert(data){
  var n = new Node(data,null,null)
  if(this.root == null){
    this.root = n
  }
  else{
    
    var current = this.root
    var parent
    while(1){
      parent = current  
      if(data<current.data){
        current = current.left
        if(current == null){
          parent.left = n
          break
        }
      }
      else{
        current = current.right
        if(current == null){
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
function inOrder(node){//--中序遍历
  if(node!=null){
    inOrder(node.left)
    console.log(node.show())
    inOrder(node.right)
  }
}
var nums = new BST()
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(55)
nums.insert(12)
console.log("Inorder traversal: ")
inOrder(nums.root)
























