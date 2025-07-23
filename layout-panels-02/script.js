export class PanelLayout {
    getCoreLayoutElements() {
        this.container = document.querySelector(".pl-container");
        this.header = document.querySelector(".pl-header");
        this.sidebarLeft = document.querySelector(".pl-sidebar-left");
        this.mainContainer = document.querySelector(".pl-main-container");
        this.mainPanel = document.querySelector(".pl-main-panel");
        this.bottomPanel = document.querySelector(".pl-bottom-panel");
        this.resizeHandle = document.querySelector(".pl-bottom-panel-resize-handle");
        this.sidebarRight = document.querySelector(".pl-sidebar-right");
        this.footer = document.querySelector(".pl-footer");
    }
    bindMouseDownResizeHandle() {
        let self = this;
        self.resizeHandle.addEventListener("mousedown", function (e) {
            self.isResizing = true;
            document.body.style.cursor = "n-resize";
            e.preventDefault();
        });
    }
    bindMouseMove() {
        let self = this;
        document.addEventListener("mousemove", function (e) {
            if (self.isResizing) {
                e.preventDefault();
                self.containerClientRect = self.container.getBoundingClientRect();
                self.headerClientRect = self.header.getBoundingClientRect();
                self.mainContainerClientRect = self.mainContainer.getBoundingClientRect();
                self.mainPanelClientRect = self.mainPanel.getBoundingClientRect();
                self.bottomPanelClientRect = self.bottomPanel.getBoundingClientRect();
                if (self.mainPanelClientRect.height === 71 && e.clientY < 71) {
                    let maxPanelHeight = self.containerClientRect.height - self.mainPanelClientRect.height - self.headerClientRect.height;
                    self.lastPanelHeight = maxPanelHeight;
                    self.bottomPanel.style.height = `${Math.floor(maxPanelHeight)}px`;
                }
                else {
                    // Fix the calculation to use the correct bottom position
                    let newPanelHeight = self.mainContainerClientRect.bottom - e.clientY;
                    self.lastPanelHeight = newPanelHeight;
                    self.bottomPanel.style.height = `${Math.floor(newPanelHeight)}px`;
                }
                if (self.bottomPanelClientRect.height < 71) {
                }
            }
        });
    }
    bindMouseUp() {
        let self = this;
        document.addEventListener("mouseup", function () {
            self.isResizing = false;
            document.body.style.cursor = "";
            console.log(self.headerClientRect);
            console.log(self.mainContainerClientRect);
            console.log(self.mainPanelClientRect);
            console.log(self.bottomPanelClientRect);
        });
    }
    bindMouseLeave() {
        let self = this;
        document.addEventListener("mouseleave", function () {
            self.isResizing = false;
            document.body.style.cursor = "";
        });
    }
}
let panelLayout = new PanelLayout();
panelLayout.getCoreLayoutElements();
panelLayout.bindMouseDownResizeHandle();
panelLayout.bindMouseMove();
panelLayout.bindMouseUp();
panelLayout.bindMouseLeave();
//# sourceMappingURL=script.js.map