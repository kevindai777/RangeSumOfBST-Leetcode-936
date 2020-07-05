//Objective is to find the total sum of all nodes between a low and high value
//in a BST.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(11)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 36)
tree.addLeftNode(tree.root.right, 15)

let L = 10
let R = 37


//O(n) solution that does a DFS traversal of the graph.

let result = 0

function dfs(node) {
    if (!node) {
        return
    }

    if (node.val >= L && node.val <= R) {
        result += node.val
    }

    //If it's still in range, get smaller
    if (node.val > L) {
        dfs(node.left)
    }

    //If it's still in range, get bigger
    if (node.val < R) {
        dfs(node.right)
    }
}
dfs(tree.root)

return result