let element = document.querySelector(".rect");

element.addEventListener("mousedown", (e) => {
    console.log("MouseDown event fired");
    console.log(e.clientX);
    console.log(e.clientY);
    element.style.left = `${e.clientX}px`;
    element.style.top = `${e.clientY}px`;
});

element.addEventListener("mousemove", (e) => {
    // console.log("MouseMove event fired");
    // console.log(e);
});

element.addEventListener("mouseup", (e) => {
    // console.log("MouseUp event fired");
    // console.log(e);
});
