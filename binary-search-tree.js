// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here


// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      this.root = null
    }

    insert(val, currentNode=this.root) {
      if (!this.root) {
        this.root = new TreeNode(val)
        return
      }

      if (val < currentNode.val){
        if (!currentNode.left){
          currentNode.left = new TreeNode(val)
        } else {
          this.insert(val, currentNode.left)
        }
      }
        else {
          if (!currentNode.right){
            currentNode.right = new TreeNode(val)
          } else {
            this.insert(val,currentNode.right)
          }
        }
      }

      search(val) {
        let currentNode = this.root;
        // Traverse the tree until the current node is null
        while (currentNode) {
            // If the value is found at the current node, return true
            if (currentNode.val === val) {
                return true;
            }
            // If the value is less than the current node's value, move to the left subtree
            if (val < currentNode.val) {
                currentNode = currentNode.left;
            } else {
                // If the value is greater than the current node's value,
                // move to the right subtree
                currentNode = currentNode.right;
            }
        }
        // If the value is not found after traversing the entire tree, return false
        return false;
    }

    preOrderTraversal(currentNode = this.root) {
      // Your code here
      if (!currentNode) return

      console.log(currentNode.val)
      this.preOrderTraversal(currentNode.left)
      this.preOrderTraversal(currentNode.right)
    }


    inOrderTraversal(currentNode = this.root) {
      // Your code here

      if (!currentNode) return

      this.inOrderTraversal(currentNode.left)
      console.log(currentNode.val)
      this.inOrderTraversal(currentNode.right)
    }



    postOrderTraversal(currentNode = this.root) {
      // Your code here
      if (!currentNode) return

      this.postOrderTraversal(currentNode.left)
      this.postOrderTraversal(currentNode.right)
      console.log(currentNode.val)
    }


      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      //  // initialize a stack with the root node
      const queue = [this.root]

      // while the stack is not empty
      while (queue.length){
        // print and remove first node in stack
        let currNode = queue.shift()
        console.log(currNode.val)

        // if the node has a left node
        if (currNode.left){
          // push the left node on the back of the stack
          queue.push(currNode.left)
        }
        // if the node has a right node
        if (currNode.right){
          // push the right node on the back of the stack
          queue.push(currNode.right)
        }
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
        // initialize a queue with the root node
        const stack = [this.root]

      // while the queue is not empty
      while(stack.length){
        // print and remove first node in queue
        const currNode = stack.pop()
        console.log(currNode.val)
        // if the node has a left node
        if (currNode.left){
          // push the left node on the back of the queue
          stack.push(currNode.left)
        }
        // if the node has a right node
        if (currNode.right){
          // push the right node on the back of the queue
          stack.push(currNode.right)
        }
      }
    }
  }

  module.exports = { BinarySearchTree, TreeNode };
