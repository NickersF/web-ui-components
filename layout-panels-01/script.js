const containerPanels = document.querySelector(".panels-container");
const sectionMainContent = document.querySelector(".section-main-content");
const mainContentContainer = document.querySelector(".main-content-container");
const panelContainer = document.querySelector(".panel-container");
const resizeHandle = document.querySelector(".panel-resize-handle");
// Get the sidebar items
// const sideBarButtons: NodeListOf<Element> = document.querySelectorAll(".menu-button");
//
// // Bind up the events
// sideBarButtons.forEach((element) => {
//     element.addEventListener("click", function (e) {
//         console.log(e);
//         console.log(this);
//     });
// });
let isResizing = false;
let lastPanelHeight;
resizeHandle.addEventListener("mousedown", function (e) {
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
        let panelContentRect = panelContainer.getBoundingClientRect();
        if (mainContentRect.height === 71 && e.clientY < 71) {
            let maxPanelHeight = containerPanelsRect.height - mainContentRect.height;
            lastPanelHeight = maxPanelHeight;
            panelContainer.style.height = `${Math.floor(maxPanelHeight)}px`;
        }
        else {
            let newPanelHeight = sectionMainContentRect.height - e.clientY;
            lastPanelHeight = newPanelHeight;
            panelContainer.style.height = `${Math.floor(newPanelHeight)}px`;
        }
        if (panelContentRect.height < 71) {
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
// Show the current panel from panel header
let panelHeaderToggleButton = document.querySelector(".panel-button");
panelHeaderToggleButton.addEventListener("click", function (e) {
    let panelRect = panelContainer.getBoundingClientRect();
    if (panelRect.height > 41) {
        panelContainer.style.height = "41px";
    }
    else {
        if (lastPanelHeight && lastPanelHeight > 41) {
            panelContainer.style.height = `${lastPanelHeight.toString()}px`;
        }
        else {
            panelContainer.style.height = "200px";
        }
    }
});
// Show/hide panels
let panel1Btn = document.getElementById("panel1Button");
panel1Btn.addEventListener("click", function (e) {
    let panelRect = panelContainer.getBoundingClientRect();
    if (panelRect.height > 41) {
        panel1Btn.classList.remove("menu-button-active");
        panelContainer.style.height = "41px";
    }
    else {
        panel1Btn.classList.add("menu-button-active");
        // Working on using the last user set height here, otherwise use the 200 px default. This might need adjusting.
        if (lastPanelHeight && lastPanelHeight > 41) {
            panelContainer.style.height = `${lastPanelHeight.toString()}px`;
        }
        else {
            panelContainer.style.height = "200px";
        }
    }
});
//# sourceMappingURL=script.js.map