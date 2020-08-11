//Objective is, given a BST, to find the value node with the value closest
//to the given target value

class Node {
    constructor(left = null, right = null, val) {
      this.val = val
      this.left = left
      this.right = right
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


let target = 3.7614


//O(H) solution where H is the height of the BST

let root = tree.root
let closest = root.val 
    
//Continuously update the closest value while going down the BST
while (root) {
    closest = Math.abs(root.val - target) < Math.abs(closest - target) ? root.val : closest
    root = target < root.val ? root.left : root.right
}

return closest