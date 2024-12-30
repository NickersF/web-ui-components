const containerPanels = document.querySelector(".container-panels");
const sectionMainContent = document.querySelector(".section-main-content");
const mainContentContainer = document.querySelector(".main-content-container")
const panelContainer = document.querySelector(".panel-container");
const resizeHandle = document.querySelector(".panel-resize-handle");

let isResizing = false;
let lastPanelHeight;

resizeHandle.addEventListener("mousedown", function(e) {
    isResizing = true;
    document.body.style.cursor = "n-resize";
    e.preventDefault();
});

document.addEventListener("mousemove", function (e) {
    if (isResizing) {
        e.preventDefault();
        let containerPanelsRect = containerPanels.getBoundingClientRect();
        let sectionMainContentRect = sectionMainContent.getBoundingClientRect();
        let mainContentRect = mainContentContainer.getBoundingClientRect();

        if (mainContentRect.height === 72 && e.clientY < 72) {
            let maxPanelHeight = containerPanelsRect.height - mainContentRect.height;
            lastPanelHeight = maxPanelHeight;
            panelContainer.style.height = `${Math.floor(maxPanelHeight)}px`;
        } else {
            let newPanelHeight = sectionMainContentRect.height - e.clientY;
            lastPanelHeight = newPanelHeight;
            panelContainer.style.height = `${Math.floor(newPanelHeight)}px`;
        }
    }
});

document.addEventListener("mouseup", function () {
    if (isResizing) {
        isResizing = false;
        document.body.style.cursor = "";
    }
});

document.addEventListener("mouseleave", function () {
    if (isResizing) {
        isResizing = false;
        document.body.style.cursor = "";
    }
});