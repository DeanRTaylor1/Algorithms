#!/usr/bin/node

function minValue(root) {
  let minv = root.data;
  while (root.left != null) {
    minv = root.left.data;
    root = root.left;
  }
  return minv;
}

class node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class tree {
  constructor(arr) {
    this.arr = [...new Set(arr.sort((a, b) => a - b))];
    this.length = this.arr.length;
    this.root = this.buildTree(this.arr, 0, this.length - 1);
  }

  buildTree(arr, start, end) {
    // console.log(arr.length, end)
    // base case for recursive function
    if (start > end) {
      return null;
    }
    let mid = Math.ceil((start + end) / 2);
    let cNode = new node(arr[mid]);
    cNode.left = this.buildTree(arr, start, mid - 1);
    cNode.right = this.buildTree(arr, mid + 1, end);
    return cNode;
  }

  insertNode(root, data) {
    if (root == null) {
      root = new node(data);
      return root;
    } else {
      if (data < root.data) {
        root.left = this.insertNode(root.left, data);
      } else if (data > root.data) {
        root.right = this.insertNode(root.right, data);
      }
      return root;
    }
  }
  findNode(root, data) {
    if (root === null) {
      console.log("not found");
    } else if (root.data === data) {
      return root;
    } else if (data < root.data) {
      return this.findNode(root.left, data);
    } else {
      return this.findNode(root.right, data);
    }
  }
  deleteNode(root, data) {
    if (root == null) {
      return root;
    } else {
      if (data < root.data) {
        root.left = this.deleteNode(root.left, data);
      } else if (data > root.data) {
        root.right = this.deleteNode(root.right, data);
      } else {
        if (root.left == null) {
          return root.right;
        } else if (root.right === null) {
          return root.left;
        } else {
          root.data = minValue(root.right);
          root.right = this.deleteNode(root.right, root.data);
        }
      }
      return root;
    }
  }
  levelOrder(node, aFunction) {
    let queue = [];
    let finalArray = [];
    if (node === null) {
      return;
    } else {
      queue.push(node);
      // console.log(queue)
      while (queue.length > 0) {
        let cNode = queue[0];
        finalArray.push(cNode.data);
        if (cNode.left != null) {
          queue.push(cNode.left);
        }
        if (cNode.right != null) {
          queue.push(cNode.right);
        }
        if (aFunction) {
          aFunction(cNode.data);
        }
        queue.shift();
      }
      if (!aFunction) {
        console.log(finalArray);
      } else {
        return;
      }
    }
  }
  inOrder(node, aFunction) {
    let finalArray = [];
    if (node === null) {
      return;
    } else if (!aFunction) {
      finalArray.push(this.inOrder(node.left, aFunction));
      finalArray.push(node.data);
      finalArray.push(this.inOrder(node.right, aFunction));
    } else {
      this.inOrder(node.left, aFunction);
      aFunction(node.data, aFunction);
      this.inOrder(node.right, aFunction);
    }
    if (!aFunction)
      return finalArray.flatMap((a) => a).filter((i) => i != null);
  }
  preOrder(node, aFunction) {
    let finalArray = [];
    if (node === null) {
      return;
    } else if (!aFunction) {
      finalArray.push(node.data);
      finalArray.push(this.preOrder(node.left, aFunction));
      finalArray.push(this.preOrder(node.right, aFunction));
    } else {
      aFunction(node.data, aFunction);
      this.preOrder(node.left, aFunction);
      this.preOrder(node.right, aFunction);
    }
    return finalArray.flatMap((a) => a).filter((i) => i != null);
  }
  postOrder(node, aFunction) {
    let finalArray = [];

    if (node === null) {
      return;
    } else if (!aFunction) {
      finalArray.push(this.postOrder(node.right, aFunction));
      finalArray.push(this.postOrder(node.left, aFunction));
      finalArray.push(node.data);
    } else {
      this.postOrder(node.right, aFunction);
      this.postOrder(node.left, aFunction);
      aFunction(node.data, aFunction);
    }
    if (!aFunction) {
      return finalArray.flatMap((a) => a).filter((i) => i != null);
    }
  }
  height(node) {
    // console.log(node)
    if (node == null) {
      return -1;
    }
    return this.height(node.left) + 1 > this.height(node.right) + 1
      ? this.height(node.left) + 1
      : this.height(node.right) + 1;
  }
  depth(node, root = this.root) {
    if (root == null) {
      return;
    } else if (node === root) {
      return 0;
    } else {
      return (
        this.depth(node, root.right) + 1 || this.depth(node, root.left) + 1
      );
    }
  }
  isBalanced(node = this.root) {
    if (node == null) {
      return false;
    }
    let left = node.left;
    let right = node.right;
    if (Math.abs(this.height(left) - this.height(right)) > 1) {
      return false;
    } else {
      return true;
    }
  }

  log(data) {
    console.log(data);
  }
}

function reBalance(currentTree) {
  let array = currentTree.inOrder(currentTree.root);
  return new tree(array);
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let array = [
  1, 10, 7, 4, 23, 8, 9, 4, 3, 5, 9000, 6999, 7000, 7001, 7, 9, 67, 6345, 324,
];
let bst = new tree(array);
let bstNode = bst.root;

prettyPrint(bstNode);
console.log(bst.isBalanced());

prettyPrint(bstNode);

bst.deleteNode(bstNode, 1);
bst.deleteNode(bstNode, 3);
bst.deleteNode(bstNode, 4);
bst.deleteNode(bstNode, 5);
bst.deleteNode(bstNode, 8);
bst.deleteNode(bstNode, 9);
bst.deleteNode(bstNode, 5);
bst.deleteNode(bstNode, 7);
bst.deleteNode(bstNode, 10);
prettyPrint(bstNode);
console.log(bst.isBalanced());
bst = reBalance(bst);
bstNode = bst.root;
prettyPrint(bstNode);
console.log(bst.isBalanced());
//console.log(bst.rebalanced);
