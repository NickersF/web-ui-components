let treeviewDataFlat = [
    {
        id: 1,
        name: "Node",
        parent_id: null
    },
    {
        id: 2,
        name: "Node",
        parent_id: 1
    },
    {
        id: 3,
        name: "Node",
        parent_id: 2
    },
    {
        id: 4,
        name: "Node",
        parent_id: 1
    },
    {
        id: 5,
        name: "Node",
        parent_id: null
    }
];

console.log(treeviewDataFlat);

// The main loop to render the treeview
function renderTreeView(treeviewId, treeviewData) {
    // Build up the container and root node
    let treeviewContainer = document.getElementById(`${treeviewId}`);
    let rootElement = document.createElement("ul");
    rootElement.setAttribute("id", `${treeviewId}_rootNode`);
    
    treeviewContainer.append(rootElement);
    
    let rootLevelNodes = treeviewData.filter(node => node.parent_id === null);
    
    console.log(rootLevelNodes);
    
    rootLevelNodes.forEach(rootNode => {
        generateTreeViewNodes(rootNode, rootElement, treeviewData);
    });
}

// Node generations
function generateTreeViewNodes(node, parentElement, nodeData) {
    let nodeStack = [{
        node: node,
        element: parentElement
    }];
    
    console.log(nodeStack);
    
    while (nodeStack.length > 0) {
        let { 
            node: currentNode,
            element: currentParent
        } = nodeStack.pop();
        
        let listItem = document.createElement("li");
        
        listItem.textContent = currentNode.name;
        currentParent.appendChild(listItem);
        
        let children = nodeData.filter(n => n.parent_id === currentNode.id);
        
        if (children.length > 0) {
            let childList = document.createElement("ul");
            
            listItem.appendChild(childList);
            
            for (let i = children.length - 1; i >= 0; i--) {
                nodeStack.push({
                    node: children[i],
                    element: childList
                });
            }
        }
    }
}

renderTreeView("myTreeview", treeviewDataFlat);

// Review of a stack basic basic basic
class Stack {
    constructor() {
        this.items = [];
    }
    
    push(item) {
        this.items.push(item);
    }
    
    pop() {
        if (this.isEmpty()) {
            return "Stack empty";
        }
        
        return this.items.pop();
    }
    
    peek() {
        if (this.isEmpty()) {
            return "Stack empty";
        }
        
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    
    print() {
        console.log(this.items);
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());
stack.print();