class Node {
    constructor(value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

class BST {
    constructor() {
        this.root = new Node(1)
    }

    traversal = (node) => {
        if (node == null) {
            console.log("End")
            return
        }
        console.log(node.value) 
        this.traversal(node.left)
        this.traversal(node.right)
    }

    add(value) {
        console.log(`adding: ${value}`)
        const node = this.root
        if (node.value === null) {
            this.root = new Node(value)
            return;
        }
        else {
            const searchTree = (node) => {
                if (value > node.value) {
                    if (node.right == null) {
                        node.right = new Node(value)
                    }
                    else {
                        return searchTree(node.right)
                    }
                }
                else if (value < node.value) {
                    if (node.left == null) {
                        node.left = new Node(value)
                    }
                    else {
                       return  searchTree(node.left)
                    }
                }
                else {
                    return null;
                }
            };
            return searchTree(node)
        }
    }
}




export const MyTree = new BST()