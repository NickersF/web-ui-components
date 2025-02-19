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
    treeviewData.forEach(node => buildTree(node, rootNode));
}

renderTreeView("myTreeview", treeviewData);


let node1Expander = document.getElementById("node1_expander");

node1Expander.addEventListener("click", function () {
    let nodeExpanderIcon = document.getElementById("node1_expand_icon");
    let nodeLineConnector = document.getElementById("node1_line_connector");
    let nodeContent = document.getElementById("node1_content");

    // Toggle the icon classes independently
    if (nodeExpanderIcon.classList.contains("bi-plus-square")) {
        nodeExpanderIcon.classList.remove("bi-plus-square");
        nodeExpanderIcon.classList.add("bi-dash-square");
    } else {
        nodeExpanderIcon.classList.remove("bi-dash-square");
        nodeExpanderIcon.classList.add("bi-plus-square");
    }

    // Toggle the background classes independently
    if (nodeLineConnector.classList.contains("bg-node-open")) {
        nodeLineConnector.classList.remove("bg-node-open");
        nodeLineConnector.classList.add("bg-node-beg");
    } else {
        nodeLineConnector.classList.remove("bg-node-beg");
        nodeLineConnector.classList.add("bg-node-open");
    }
});