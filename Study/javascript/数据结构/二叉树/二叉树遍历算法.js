var stack = require("../栈/stack")
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
    this.inOrder1 = inOrder1 //升序遍历
    //以下两个都是删除节点函数
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
//中序遍历递归写法
function inOrder1(node) {
    //--中序遍历
    if (node != null) {
        inOrder1(node.left)
        console.log(node.data)
        inOrder1(node.right)
    }
}
//中序遍历迭代写法
function inOrder2(node) {
    function goAlongLeftBranch(x,S) {
        while(x){
            S.push(x);
            x = x.left;
        }
    }
    let stack1 = new stack.Stack();
    let x = node
    while(1){
        goAlongLeftBranch(x,stack1);
        if(stack1.top===0) break;
        x = stack1.pop();
        console.log(x.data)
        x = x.right
    }
}
//前序遍历递归写法
function preOrder1(node) {
    if(!(node===null)){
        console.log(node.data);
        preOrder1(node.left);
        preOrder1(node.right)
    }
}
//前序遍历迭代写法（利用栈）
function preOrder2(node) {
    if(!node) return
    let stack1 = new stack.Stack();
    stack1.push(node)
    while(stack1.top>0){
        let x = stack1.pop()
        console.log(x.data)
        if(x.right){
            stack1.push(x.right)
        }
        if(x.left){
            stack1.push(x.left)
        }
    }
}

var nums = new BST()
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(55);
nums.insert(12);
//preOrder1(nums.root)
//console.log("-------------------")
//preOrder2(nums.root)
inOrder1(nums.root)
console.log("-------------------")
inOrder2(nums.root)
