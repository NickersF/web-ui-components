const containerPanels: HTMLElement = document.querySelector(".panels-container");
const sectionMainContent: HTMLElement = document.querySelector(".section-main-content");
const mainContentContainer: HTMLElement = document.querySelector(".main-content-container")
const panelContainer: HTMLElement = document.querySelector(".panel-container");
const resizeHandle: HTMLElement = document.querySelector(".panel-resize-handle");

// Get the sidebar items
const sideBarButtons: NodeListOf<Element> = document.querySelectorAll(".menu-button");

// Bind up the events
sideBarButtons.forEach((element) => {
    element.addEventListener("click", function (e) {
        console.log(e);
        console.log(this);
    });
});

let isResizing: boolean = false;
let lastPanelHeight: number;

resizeHandle.addEventListener("mousedown", function(e) {
    isResizing = true;
    document.body.style.cursor = "n-resize";
    e.preventDefault();
});

document.addEventListener("mousemove", function (e) {
    if (isResizing) {
        e.preventDefault();
        let containerPanelsRect: DOMRect = containerPanels.getBoundingClientRect();
        let sectionMainContentRect: DOMRect = sectionMainContent.getBoundingClientRect();
        let mainContentRect: DOMRect = mainContentContainer.getBoundingClientRect();
        let panelContentRect: DOMRect = panelContainer.getBoundingClientRect();

        if (mainContentRect.height === 71 && e.clientY < 71) {
            let maxPanelHeight: number = containerPanelsRect.height - mainContentRect.height;
            lastPanelHeight = maxPanelHeight;
            panelContainer.style.height = `${Math.floor(maxPanelHeight)}px`;
        } else {
            let newPanelHeight: number = sectionMainContentRect.height - e.clientY;
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

// Show/hide panels
// let panel1Btn: HTMLElement = document.getElementById("panel1Button");
//
// panel1Btn.addEventListener("click", function (e) {
//     let panelRect: DOMRect = panelContainer.getBoundingClientRect();
//
//     if (panelRect.height > 8) {
//         panel1Btn.classList.remove("menu-button-active");
//         panelContainer.style.height = "0";
//     } else {
//         panel1Btn.classList.add("menu-button-active");
//
//         // Working on using the last user set height here, otherwise use the 200 px default. This might need adjusting.
//         if (lastPanelHeight && lastPanelHeight > 32) {
//             panelContainer.style.height = `${lastPanelHeight.toString()}px`;
//         } else {
//             panelContainer.style.height = "200px";
//         }
//     }
// });