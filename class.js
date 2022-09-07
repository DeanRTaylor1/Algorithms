#!/usr/bin/node

class node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buildTree(arr, start, end) {
  // console.log(arr.length, end)
  // base case for recursive function
  if (start > end) {
    return null;
  }
  let mid = Math.ceil((start + end) / 2);
  let cNode = new node(arr[mid]);
  cNode.left = buildTree(arr, start, mid - 1);
  cNode.right = buildTree(arr, mid + 1, end);

  return cNode;
}

function insertNode(root, data) {
  if (root == null) {
    root = new node(data);
    return root;
  } else {
    if (data < root.data) {
      root.left = insertNode(root.left, data);
    } else if (data > root.data) {
      root.right = insertNode(root.right, data);
    }
    return root;
  }
}

function findNode(root, data) {
  if (root === null) {
    console.log("not found");
  } else if (root.data === data) {
    return root;
  } else if (data < root.data) {
    return findNode(root.left, data);
  } else {
    return findNode(root.right, data);
  }
}

function deleteNode(root, data) {
  if (root == null) {
    return root;
  } else {
    if (data < root.data) {
      root.left = deleteNode(root.left, data);
    } else if (data > root.data) {
      root.right = deleteNode(root.right, data);
    } else {
      if (root.left == null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      } else {
        root.data = minValue(root.right);
        root.right = deleteNode(root.right, root.data);
      }
    }

    return root;
  }
}

function minValue(root) {
  let minv = root.data;
  while (root.left != null) {
    minv = root.left.data;
    root = root.left;
  }
  return minv;
}

function levelOrder(node, aFunction) {
  let tempArray = [];
  let finalArray = [];

  if (node === null) {
    return;
  } else {
    tempArray.push(node);
    finalArray.push(node.data);
    // console.log(tempArray)
    while (tempArray.length > 0) {
      let cNode = tempArray[0];
      // console.log(cNode.data)
      if (cNode.left != null) {
        tempArray.push(cNode.left);
        finalArray.push(cNode.left.data);
      }
      if (cNode.right != null) {
        tempArray.push(cNode.right);
        finalArray.push(cNode.right.data);
      }
      if (aFunction) {
        aFunction(cNode.data);
      }
      tempArray.shift();
    }
    if (!aFunction) {
      console.log(finalArray);
    } else {
      return;
    }
  }
}
function inOrder(node, aFunction) {
  let finalArray = [];
  if (node === null) {
    return;
  } else if (!aFunction) {
    finalArray.push(inOrder(node.left, aFunction));
    finalArray.push(node.data);
    finalArray.push(inOrder(node.right, aFunction));
  } else {
    inOrder(node.left, aFunction);
    aFunction(node.data, aFunction);
    inOrder(node.right, aFunction);
  }
  return finalArray.flatMap((a) => a).filter((i) => i != null);
}

function preOrder(node, aFunction) {
  let finalArray = [];

  if (node === null) {
    return;
  } else if (!aFunction) {
    finalArray.push(node.data);
    finalArray.push(preOrder(node.left, aFunction));
    finalArray.push(preOrder(node.right, aFunction));
  } else {
    aFunction(node.data, aFunction);
    preOrder(node.left, aFunction);
    preOrder(node.right, aFunction);
  }
  return finalArray.flatMap((a) => a).filter((i) => i != null);
}

function postOrder(node, aFunction) {
  let finalArray = [];

  if (node === null) {
    return;
  } else if (!aFunction) {
    finalArray.push(postOrder(node.right, aFunction));
    finalArray.push(postOrder(node.left, aFunction));
    finalArray.push(node.data);
  } else {
    postOrder(node.right, aFunction);
    postOrder(node.left, aFunction);
    aFunction(node.data, aFunction);
  }
  return finalArray.flatMap((a) => a).filter((i) => i != null);
}

function log(nodeVal) {
  console.log(nodeVal);
}

function height(node) {
  // console.log(node)
  if (node == null) {
    return -1;
  }
  return height(node.left) + 1 > height(node.right) + 1
    ? height(node.left) + 1
    : height(node.right) + 1;
}

function depth(node) {
  let a = height(node);
  return a;

  // if(node === node){
  //     return 0
  // }
  // return depth(node.left) + 1 === 0 ? depth(node.right) + 1 : depth(node.left) + 1
}

class tree {
  constructor(arr) {
    this.arr = [...new Set(arr.sort((a, b) => a - b))];
    this.length = this.arr.length;
    this.node = buildTree(this.arr, 0, this.length - 1);
  }
}
let array = [
  1, 10, 7, 4, 23, 8, 9, 4, 3, 5, 9000, 6999, 7000, 7001, 7, 9, 67, 6345, 324,
];
let bst = new tree(array);
let bstNode = bst.node;

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// insertNode(bstNode, 2)
// prettyPrint(bstNode)
// deleteNode(bstNode, 23)
prettyPrint(bstNode);
// console.log(findNode(bst.node, 9000))
// preOrder(bstNode, log)
// inOrder(bstNode, log)
// postOrder(bstNode, log)
console.log(height(bstNode));
deleteNode(bstNode, 1);
prettyPrint(bstNode);
console.log(depth(bstNode.right));
