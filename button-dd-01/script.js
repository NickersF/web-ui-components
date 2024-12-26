const menuButton1 = document.getElementById("menuButton1");
const buttonMenu1 = document.getElementById("buttonMenu1");
const closeMenuBtn = document.getElementById("closeMenuBtn");

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

closeMenuBtn.addEventListener("click", function () {
    let buttonMenuClassList = buttonMenu1.classList;

    if (buttonMenuClassList.contains("button-menu-container-closed")) {
        buttonMenuClassList.remove("button-menu-container-closed");
        buttonMenuClassList.add("button-menu-container-open");
    } else {
        buttonMenuClassList.remove("button-menu-container-open");
        buttonMenuClassList.add("button-menu-container-closed");
    }
});

// Close the menu if the user clicks outside of it
document.addEventListener("click", function (event) {
    const isClickInsideMenu = buttonMenu1.contains(event.target);
    const isClickInsideButton = menuButton1.contains(event.target);

    if (!isClickInsideMenu && !isClickInsideButton) {
        // Close the menu if it's open
        let buttonMenuClassList = buttonMenu1.classList;
        if (buttonMenuClassList.contains("button-menu-container-open")) {
            buttonMenuClassList.remove("button-menu-container-open");
            buttonMenuClassList.add("button-menu-container-closed");
        }
    }
});