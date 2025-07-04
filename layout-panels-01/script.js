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
        let panelContentRect = panelContainer.getBoundingClientRect();

        if (mainContentRect.height === 71 && e.clientY < 71) {
            let maxPanelHeight = containerPanelsRect.height - mainContentRect.height;
            lastPanelHeight = maxPanelHeight;
            panelContainer.style.height = `${Math.floor(maxPanelHeight)}px`;
        } else {
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

// Open panel 1
let panel1Btn = document.getElementById("panel1Button");

panel1Btn.addEventListener("click", function () {
    let panelRect = panelContainer.getBoundingClientRect();
    
    if (panelRect.height > 8) {
        panel1Btn.classList.remove("menu-button-active");
        // panel2Btn.classList.remove("menu-button-active");
        // panel3Btn.classList.remove("menu-button-active");
        
        panelContainer.style.height = "0";
    } else {
        panel1Btn.classList.add("menu-button-active");
        // panel2Btn.classList.remove("menu-button-active");
        // panel3Btn.classList.remove("menu-button-active");
        
        // Working on using the last user set height here, otherwise use the 200px default. This might need adjusting.
        if (lastPanelHeight && lastPanelHeight > 32) {
            panelContainer.style.height = `${lastPanelHeight.toString()}px`;
        } else {
            panelContainer.style.height = "200px";
        }
    }
});

let panel2Btn = document.getElementById("panel2Button");

panel2Btn.addEventListener("click", function () {
    let panelRect = panelContainer.getBoundingClientRect();

    if (panelRect.height > 8) {
        panel1Btn.classList.remove("menu-button-active");
        panel2Btn.classList.remove("menu-button-active");
        panel3Btn.classList.remove("menu-button-active");

        panelContainer.style.height = "0";
    } else {
        panel1Btn.classList.remove("menu-button-active");
        panel2Btn.classList.add("menu-button-active");
        panel3Btn.classList.remove("menu-button-active");

        // Working on using the last user set height here, otherwise use the 200px default. This might need adjusting.
        if (lastPanelHeight && lastPanelHeight > 32) {
            panelContainer.style.height = `${lastPanelHeight.toString()}px`;
        } else {
            panelContainer.style.height = "200px";
        }
    }
});

let panel3Btn = document.getElementById("panel3Button");

panel3Btn.addEventListener("click", function () {
    let panelRect = panelContainer.getBoundingClientRect();

    if (panelRect.height > 8) {
        panel1Btn.classList.remove("menu-button-active");
        panel2Btn.classList.remove("menu-button-active");
        panel3Btn.classList.remove("menu-button-active");

        panelContainer.style.height = "0";
    } else {
        panel1Btn.classList.remove("menu-button-active");
        panel2Btn.classList.remove("menu-button-active");
        panel3Btn.classList.add("menu-button-active");

        // Working on using the last user set height here, otherwise use the 200px default. This might need adjusting.
        if (lastPanelHeight && lastPanelHeight > 32) {
            panelContainer.style.height = `${lastPanelHeight.toString()}px`;
        } else {
            panelContainer.style.height = "200px";
        }
    }
});