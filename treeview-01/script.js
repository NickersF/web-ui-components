let treeviewData = [
    {
        id: 1,
        name: "Node 1",
        children: [
            {
                id: 1.1,
                name: "Node 1.1",
                parent: 1,
                children: [
                    {
                        id: 1.2,
                        name: "Node 1.2",
                        parent: 1.1,
                        children: []
                    }
                ]
            },
            {
                id: 1.2,
                name: "Node 1.2",
                parent: 1
            }
        ]
    },
    {
        id: 2,
        name: "Node 2"
    }
];

console.log(treeviewData);

// Recursively builds an unordered list from the tree data structure
function buildTree(node, rootNode) {
    let parentNode = document.createElement("li");
    parentNode.textContent = node.name;
    
    rootNode.appendChild(parentNode);
    
    if (node.children && node.children.length > 0) {
        let childRootNode = document.createElement("ul");
        
        node.children.forEach(childNode => {
            buildTree(childNode, childRootNode);
        });
        
        parentNode.appendChild(childRootNode);
    }
}

// The data structure needs CRUD

// The main loop to render the treeview
function renderTreeView(treeviewId, treeviewData) {
    // Build up the container and root node
    let treeviewContainer = document.getElementById(`${treeviewId}`);
    let rootNode = document.createElement("ul");

    rootNode.setAttribute("id", `${treeviewId}_rootNode`);
    treeviewContainer.append(rootNode);

// Fill out the treeview with the data
    treeviewData.forEach(Node => buildTree(Node, rootNode));
}

renderTreeView("myTreeview", treeviewData);