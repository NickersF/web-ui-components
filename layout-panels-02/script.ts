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
	public resizeHandle: HTMLElement;
	public sidebarRight: HTMLElement;
	public footer: HTMLElement;
	public isResizing: boolean;
    public lastPanelHeight: number;
	
	public getCoreLayoutElements(): void {
		this.container = document.querySelector(".pl-container") as HTMLElement;
		this.header = document.querySelector(".pl-header") as HTMLElement;
		this.sidebarLeft = document.querySelector(".pl-sidebar-left") as HTMLElement;
		this.mainContainer = document.querySelector(".pl-main-container") as HTMLElement;
		this.mainPanel = document.querySelector(".pl-main-panel");
		this.bottomPanel = document.querySelector(".pl-bottom-panel") as HTMLElement;
		this.resizeHandle = document.querySelector(".pl-bottom-panel-resize-handle") as HTMLElement;
		this.sidebarRight = document.querySelector(".pl-sidebar-right") as HTMLElement;
		this.footer = document.querySelector(".pl-footer") as HTMLElement;
	}
	
	public bindMouseDownResizeHandle(): void {
		let self = this;
		
		self.resizeHandle.addEventListener("mousedown", function (e) {
			self.isResizing = true;
			document.body.style.cursor = "n-resize";
			e.preventDefault();
		});
	}
	
	public bindMouseMove(): void {
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
    
    public bindMouseUp(): void {
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
    
    public bindMouseLeave(): void {
        let self = this;
        
        document.addEventListener("mouseleave", function () {
            self.isResizing = false;
            document.body.style.cursor = "";
        });
    }
}

let panelLayout: PanelLayout = new PanelLayout();

panelLayout.getCoreLayoutElements();
panelLayout.bindMouseDownResizeHandle();
panelLayout.bindMouseMove();
panelLayout.bindMouseUp();
panelLayout.bindMouseLeave();