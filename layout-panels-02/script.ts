export class PanelLayout {
	public container: HTMLElement;
    public containerClientRect: DOMRect;
	public header: HTMLElement;
    public headerClientRect: DOMRect;
	public sidebarLeft: HTMLElement;
	public mainContainer: HTMLElement;
    public mainContainerClientRect: DOMRect;
	public mainPanel: HTMLElement;
    public mainPanelClientRect: DOMRect;
	public bottomPanel: HTMLElement;
    public bottomPanelClientRect: DOMRect;
	public bottomPanelResizeHandle: HTMLElement;
	public sidebarRight: HTMLElement;
	public footer: HTMLElement;
	public isResizingRightSidebar: boolean;
	public isResizingBottomPanel: boolean;
    public lastPanelHeight: number;
	
	public getCoreLayoutElements(): void {
		this.container = document.querySelector(".pl-container") as HTMLElement;
		this.header = document.querySelector(".pl-header") as HTMLElement;
		this.sidebarLeft = document.querySelector(".pl-sidebar-left") as HTMLElement;
		this.mainContainer = document.querySelector(".pl-main-container") as HTMLElement;
		this.mainPanel = document.querySelector(".pl-main-panel");
		this.bottomPanel = document.querySelector(".pl-bottom-panel") as HTMLElement;
		this.bottomPanelResizeHandle = document.querySelector(".pl-bottom-panel-resize-handle") as HTMLElement;
		this.sidebarRight = document.querySelector(".pl-sidebar-right") as HTMLElement;
		this.footer = document.querySelector(".pl-footer") as HTMLElement;
	}
	
	public bindMouseDownRightSidebarResizeHandle(): void {
		let self = this;
	}
	
	public bindMouseDownBottomPanelResizeHandle(): void {
		let self = this;
		
		self.bottomPanelResizeHandle.addEventListener("mousedown", function (e) {
			self.isResizingBottomPanel = true;
			document.body.style.cursor = "n-resize";
			e.preventDefault();
		});
	}
	
	// Adds the global mouse move event listener to detect user mouse move inputs.
	public bindDocumentMouseMove(): void {
		let self = this;
        
		document.addEventListener("mousemove", function (e) {
			// I think I need to add conditions here for handling the resizing of different panels
            if (self.isResizingBottomPanel) {
                e.preventDefault();
                
                self.containerClientRect = self.container.getBoundingClientRect();
                self.headerClientRect = self.header.getBoundingClientRect();
                self.mainContainerClientRect = self.mainContainer.getBoundingClientRect();
                self.mainPanelClientRect = self.mainPanel.getBoundingClientRect();
                self.bottomPanelClientRect = self.bottomPanel.getBoundingClientRect();
                
                if (self.mainPanelClientRect.height === 71 && e.clientY < 71) {
                    let maxPanelHeight: number = self.containerClientRect.height - self.mainPanelClientRect.height - self.headerClientRect.height;
                    self.lastPanelHeight = maxPanelHeight;
                    self.bottomPanel.style.height = `${Math.floor(maxPanelHeight)}px`;
                } else {
                    // Fix the calculation to use the correct bottom position
                    let newPanelHeight: number = self.mainContainerClientRect.bottom - e.clientY;
                    self.lastPanelHeight = newPanelHeight;
                    self.bottomPanel.style.height = `${Math.floor(newPanelHeight)}px`;
                }
                
                if (self.bottomPanelClientRect.height < 71) {
                    
                }
            }
        });
	}
	
	// Adds the global mouse up event listener to cancel resizing on mouse move inputs.
    public bindDocumentMouseUp(): void {
        let self = this;
        
        document.addEventListener("mouseup", function () {
            self.isResizingBottomPanel = false;
            document.body.style.cursor = "";
        });
    }
    
	// Adds the global mouse leave event listener to cancel resizing when the mouse leaves the viewport.
    public bindDocumentMouseLeave(): void {
        let self = this;
        
        document.addEventListener("mouseleave", function () {
            self.isResizingBottomPanel = false;
            document.body.style.cursor = "";
        });
    }
}

let panelLayout: PanelLayout = new PanelLayout();

panelLayout.getCoreLayoutElements();
panelLayout.bindMouseDownBottomPanelResizeHandle();
panelLayout.bindDocumentMouseMove();
panelLayout.bindDocumentMouseUp();
panelLayout.bindDocumentMouseLeave();