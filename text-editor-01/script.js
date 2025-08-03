class TextEditor {
    constructor(rootElId) {
        this.rootElId = rootElId;
    }

    // Most of this will be gone when porting the layout to Blazor - I just need to see how this works
    initializeTextEditor() {
        let editBtn = document.getElementById("editBtn");
        let previewBtn = document.getElementById("previewBtn");
        let editorToolbar = document.getElementById("editorToolBar");

        const toggleTabs = (e) => {
            let tabId = e.target.getAttribute("id").replace("Btn", "Tab");
            let navTabs = document.querySelectorAll(".nav-tab-content");
            let editorTextArea = document.getElementById("editorTextArea");
            let previewTab = document.getElementById("previewTab");
            
            // Toggle the editor controls when the edit tab is active
            if (tabId === "editTab") {
                editorToolbar.classList.remove("display-none");
            } else {
                editorToolbar.classList.add("display-none");
                previewTab.textContent = editorTextArea.value;
            }

            // Toggle the tab
            navTabs.forEach((item) => {
                if (item.getAttribute("id") !== tabId) {
                    item.classList.add("display-none");
                } else {
                    item.classList.remove("display-none");
                }
            });
        };

        editBtn.addEventListener("click", toggleTabs);
        previewBtn.addEventListener("click", toggleTabs);

        // Initialize with the "Write" tab active
        document.getElementById("editTab").classList.remove("display-none");
        document.getElementById("previewTab").classList.add("display-none");
    }
}

let myTextEditor = new TextEditor("myTextEditor");
myTextEditor.initializeTextEditor();