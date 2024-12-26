const menuButton1 = document.getElementById("menuButton1");
const buttonMenu1 = document.getElementById("buttonMenu1");
const closeMenuBtn = document.getElementById("closeMenuBtn");

// Open/close the menu from the main dropdown button
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

// Close the menu from the close button on the menu
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
document.addEventListener("click", function (e) {
    const isClickInsideMenu = buttonMenu1.contains(e.target);
    const isClickInsideButton = menuButton1.contains(e.target);

    if (!isClickInsideMenu && !isClickInsideButton) {
        let buttonMenuClassList = buttonMenu1.classList;
        
        if (buttonMenuClassList.contains("button-menu-container-open")) {
            buttonMenuClassList.remove("button-menu-container-open");
            buttonMenuClassList.add("button-menu-container-closed");
        }
    }
});