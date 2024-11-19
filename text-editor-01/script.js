class TextEditor {
    constructor(rootElId) {
        this.rootElId = rootElId;
    }

    initializeTextEditor() {
        let editBtn = document.getElementById("editBtn");
        let previewBtn = document.getElementById("previewBtn");

        const toggleTabs = (e) => {
            let tabId = e.target.getAttribute("id").replace("Btn", "Tab");
            let navTabs = document.querySelectorAll(".nav-tab-content");

            navTabs.forEach((item) => {
                if (item.getAttribute("id") !== tabId) {
                    item.classList.add("display-none");
                } else {
                    item.classList.remove("display-none"); // Corrected typo here
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