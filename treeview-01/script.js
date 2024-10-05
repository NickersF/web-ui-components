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

let treeviewContainer = document.getElementById("treeview");
let rootNode = document.createElement("ul");
rootNode.setAttribute("id", "rootNode");

treeviewContainer.append(rootNode);

treeviewData.forEach((node) => {
    let currentNode = document.createElement("li");
    currentNode.textContent = node.name;
    
    rootNode.append(currentNode);
    
    if (node.children) {
        let currentChildRoot = document.createElement("ul");
        
        node.children.forEach((childNode) => {
            currentNode.append(currentChildRoot);
            let currentChildNode = document.createElement("li");
            currentChildNode.textContent = childNode.name;
            currentChildRoot.append(currentChildNode);
        });
    } 
});