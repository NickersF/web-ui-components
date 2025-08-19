let treeviewDataFlat = [
    {
        id: 1,
        name: "Node 1",
        parent_id: null
    },
    {
        id: 2,
        name: "Node 2",
        parent_id: 1
    },
    {
        id: 3,
        name: "Node 3",
        parent_id: 1
    },
    {
        id: 4,
        name: "Node 4",
        parent_id: 3
    },
    {
        id: 5,
        name: "Node 5",
        parent_id: 3
    },
    {
        id: 6,
        name: "Node 6",
        parent_id: 1
    },
    {
        id: 7,
        name: "Node 7",
        parent_id: null
    },
    {
        id: 8,
        name: "Node 8",
        parent_id: null
    }
];

function generateTreeView(data, containerId) {
    // Attach to the container
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error(`Container with ID "${containerId}" not found`);
        return;
    }

    // 1. Clear the container
    container.innerHTML = "";

    // 2. Build a hierarchical structure from flat data
    const rootNodes = [];
    const nodeMap = {};

    // First pass: create all node objects and map them by id
    data.forEach(item => {
        nodeMap[item.id] = {
            ...item,
            children: []
        };
    });

    // Second pass: establish parent-child relationships
    data.forEach(item => {
        if (item.parent_id === null) {
            rootNodes.push(nodeMap[item.id]);
        } else if (nodeMap[item.parent_id]) {
            nodeMap[item.parent_id].children.push(nodeMap[item.id]);
        }
    });

    // 4. Render the tree structure recursively
    rootNodes.forEach(rootNode => {
        renderNode(rootNode, container, true);
    });
}

function renderNode(node, parentElement, isRoot) {
    const nodeElement = document.createElement("div");

    // Set the render type of root or non-root (leaf)
    if (isRoot) {
        nodeElement.className = "tv-node tv-node-root";
    } else {
        nodeElement.className = "tv-node";
    }

    if (node.children.length > 0) {
        // Build out a root node with its wrapper and toggle control
        const wrapperElement = document.createElement("div");
        wrapperElement.className = "tv-node-wrapper";

        const toggleIcon = document.createElement("span");
        toggleIcon.className = "tv-toggle-icon expanded";

        const icon = document.createElement("i");
        icon.className = "bi bi-chevron-down";

        toggleIcon.appendChild(icon);
        wrapperElement.appendChild(toggleIcon);

        // Build the node content element
        const nodeContent = document.createElement("span");
        nodeContent.className = "tv-node-content";
        nodeContent.textContent = node.name;

        wrapperElement.appendChild(nodeContent);
        nodeElement.appendChild(wrapperElement);

        // Recursively render children
        node.children.forEach(childNode => {
            // Check if this child has its own children
            let childHasChildren;

            if (childNode.children && childNode.children.length > 0) {
                childHasChildren = true;
            } else {
                childHasChildren = false;
            }

            renderNode(childNode, nodeElement, childHasChildren);
        });
    } else {
        // Leaf node without children
        const nodeContent = document.createElement("span");
        nodeContent.className = "tv-node-content";
        nodeContent.textContent = node.name;

        nodeElement.appendChild(nodeContent);
    }

    parentElement.appendChild(nodeElement);
}

// Usage
generateTreeView(treeviewDataFlat, 'treeview2');

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

// The basic idea using an unordered list to render the tree data
function renderTreeViewLi(treeviewId, treeviewData) {
    // Build up the container and root node
    let treeviewContainer = document.getElementById(`${treeviewId}`);
    let rootElement = document.createElement("ul");
    rootElement.setAttribute("id", `${treeviewId}_rootNode`);
    
    treeviewContainer.append(rootElement);
    
    let rootLevelNodes = treeviewData.filter(node => node.parent_id === null);
    
    rootLevelNodes.forEach(rootNode => {
        generateTreeViewNodesLi(rootNode, rootElement, treeviewData);
    });
}

// Node generations
function generateTreeViewNodesLi(node, parentElement, nodeData) {
    let nodeStack = [{
        node: node,
        element: parentElement
    }];
    
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