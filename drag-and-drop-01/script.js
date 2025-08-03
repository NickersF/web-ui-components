let dragSrcEl = null;

function handleDragStart(e) {
    this.style.opacity = "0.4";
    
    dragSrcEl = this;
    
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    
    e.dataTransfer.dropEffect = "move";
    
    return false;
}

function handleDragEnter(e) {
    this.classList.add("over");
}

function handleDragLeave(e) {
    this.classList.remove("over");
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    
    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData("text/html");
    }
}

function handleDragEnd(e) {
    this.style.opacity = "1";

    items.forEach(function (item) {
        item.classList.remove("over");
    });
}

let items = document.querySelectorAll(".container .box");

items.forEach(function (item) {
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragover", handleDragOver);
    item.addEventListener("dragenter", handleDragEnter);
    item.addEventListener("dragleave", handleDragLeave);
    item.addEventListener("dragend", handleDragEnd);
    item.addEventListener("drop", handleDrop);
});