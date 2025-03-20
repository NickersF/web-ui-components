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
        parent_id: 2
    },
    {
        id: 5,
        name: "Node",
        parent_id: 1
    },
    {
        id: 6,
        name: "Node",
        parent_id: null
    }
];

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

// Toggles nodes with them all closed initially
function toggleNodes() {
    document.querySelectorAll(".tv-node-root").forEach(function(node) {
        // Hide all child nodes to start
        Array.from(node.children).forEach(function(child) {
            if (child.classList.contains("tv-node")) {
                child.style.display = "none";
            }
        });

        // Reset the icons
        const toggleIcon = node.querySelector(".tv-toggle-icon");
        
        if (toggleIcon) {
            toggleIcon.classList.remove("expanded");
        }
    });

    // Bind up the click event to the toggle icons
    document.querySelectorAll(".tv-toggle-icon").forEach(function(icon) {
        icon.addEventListener("click", function() {
            let parentNode = this.closest(".tv-node-root");
            
            // Toggle anim
            this.classList.toggle("expanded");
            
            if (parentNode) {
                if (this.classList.contains("expanded")) {
                    // Show children
                    Array.from(parentNode.children).forEach(function(child) {
                        if (child.classList.contains("tv-node")) {
                            child.style.display = "";
                        }
                    });
                } else {
                    // Hide children
                    Array.from(parentNode.children).forEach(function(child) {
                        if (child.classList.contains("tv-node")) {
                            child.style.display = "none";
                        }
                    });
                }
            }
        });
    });
}

toggleNodes();

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

// const stack = new Stack();
//
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
//
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.size());
// console.log(stack.isEmpty());
// stack.print();