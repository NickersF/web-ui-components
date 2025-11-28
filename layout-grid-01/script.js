let containerEl = document.getElementById("container");
let boxDivs = [];

for (let i = 0; i < 16; i++) {
    const boxDiv = document.createElement("div");
    boxDiv.classList.add("box");
    boxDiv.id = `box${i}`;
    containerEl.append(boxDiv);
    boxDivs.push(boxDiv);
}

console.log(boxDivs);

boxDivs.forEach(el => {
    el.addEventListener("click", (e) => {
        handleBoxClick(el);
    });
});

function handleBoxClick(el) {
    if (el.classList.contains("box")) {
        el.classList.remove("box");
        el.classList.add("box-active");
    } else {
        el.classList.remove("box-active");
        el.classList.add("box");
    }
    console.log("Box clicked.", el);
}

// The 12 box container example
let container12El = document.getElementById("container12");
let box12Divs = [];

for (let i = 0; i < 48; i++) {
    const boxDiv = document.createElement("div");
    boxDiv.classList.add("box");
    boxDiv.id = `box12${i}`;
    container12El.append(boxDiv);
    box12Divs.push(boxDiv);
}