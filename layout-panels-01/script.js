const sectionMainContent = document.querySelector(".section-main-content");
const mainContentContainer = document.querySelector(".main-content-container")
const panelContainer = document.querySelector(".panel-container");
const resizeHandle = document.querySelector(".panel-resize-handle");

let isResizing = false;

resizeHandle.addEventListener("mousedown", function(e) {
    isResizing = true;
});

document.addEventListener("mousemove", function (e) {
    if (isResizing) {
        let sectionMainContentRect = sectionMainContent.getBoundingClientRect();
        let mainContentRect = mainContentContainer.getBoundingClientRect();
        let panelRect = panelContainer.getBoundingClientRect();
        
        let newPanelHeight = sectionMainContentRect.height - e.clientY;
        console.log("Mouse Y position: ", e.clientY);
        // console.log("New panel height: ", newPanelHeight);
        // console.log("Section main content height: ", sectionMainContentRect.height);
        console.log("Main content area: ", mainContentRect.height);
        
        // Something here is causing a 1px overflow - might be CSS? The numbers add up!
        if (mainContentRect.height === 72 && e.clientY < 72) {
            console.log("Panel height: ", newPanelHeight);
            console.log("New panel height: ", panelRect.height);
            panelContainer.style.height = `${panelRect.height}`;
            return;
        }
        
        panelContainer.style.height = `${newPanelHeight.toString()}px`;
    }
});

document.addEventListener("mouseup", function (e) {
    isResizing = false;
});