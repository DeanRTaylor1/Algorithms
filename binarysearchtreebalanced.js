#!/usr/bin/node

class node {
    constructor(data){
        this.data = data;
        this.left = null
        this.right = null
    }   
}

function buildTree(arr, start, end){
    // console.log(arr.length, end)
    // base case for recursive function
    if(start > end){
        return null
    }    
    let mid = Math.ceil((start + end) / 2)    
    let cNode = new node(arr[mid])            
    cNode.left =  buildTree(arr, start, (mid - 1))
    cNode.right =  buildTree(arr, (mid + 1), end)

    return cNode

}



class tree {
    constructor(arr){
        this.arr = [... new Set(arr.sort((a,b)=> a - b))]
        this.length = this.arr.length
        this.node = buildTree(this.arr, 0, this.length-1)                
    }

}
let array = [1,10, 7, 4, 23, 8, 9, 4, 3, 5, 9000,6999, 7000, 7001, 7, 9, 67, 6345, 324]
let sorted = [... new Set(array.sort((a,b)=> a - b))]

let bst = new tree(array)
let bstNode = bst.node
console.log(sorted.length)


const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

prettyPrint(bstNode)