const menuButton1 = document.getElementById("menuButton1");
const buttonMenu1 = document.getElementById("buttonMenu1");

menuButton1.addEventListener("click", function () {
    let buttonMenuClassList = buttonMenu1.classList;
    
    if (buttonMenuClassList.contains("button-menu-container-closed")) {
        buttonMenuClassList.remove("button-menu-container-closed");
        buttonMenuClassList.add("button-menu-container-open");
    } else {
        buttonMenuClassList.remove("button-menu-container-open");
        buttonMenuClassList.add("button-menu-container-closed");
    }
});