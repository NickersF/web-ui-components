let openDialogBtn = document.getElementById("openDialog_btn");
let dialogExample = document.getElementById("dialogExample");
let closeDialogBtn = document.getElementById("closeDialogExample_btn");

if (openDialogBtn && dialogExample) {
    openDialogBtn.addEventListener("click", function () {
        dialogExample.show();
    });
}

if (closeDialogBtn && dialogExample) {
    closeDialogBtn.addEventListener("click", function () {
        dialogExample.close();
    });
}

let openModalBtn = document.getElementById("openModal_btn");
let modalExample = document.getElementById("modalExample");
let closeModalBtn = document.getElementById("closeModalExample_btn");

if (openModalBtn && modalExample) {
    openModalBtn.addEventListener("click", function () {
        modalExample.showModal();
    });
}

if (closeModalBtn && modalExample) {
    closeModalBtn.addEventListener("click", function () {
        modalExample.close();
    });
}

let openFormModalBtn = document.getElementById("openFormModal_btn");
let modalFormExample = document.getElementById("modalFormExample");
let submitBtn = document.getElementById("submitBtn");
let outputEl = document.querySelector("output");
let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let modalForm = document.getElementById("modalForm");

if (openFormModalBtn && modalFormExample) {
    openFormModalBtn.addEventListener("click", function () {
        modalFormExample.showModal();
    });
}

if (modalFormExample) {
    modalFormExample.addEventListener("close", function (e) {
        console.log(e);

        if (outputEl) {
            outputEl.value = modalFormExample.returnValue === "default" ? "No return value." : `Return value: ${modalFormExample.returnValue}`;
        }
    });
}

if (submitBtn && modalFormExample && usernameInput && passwordInput) {
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();

        let formValues = usernameInput.value + passwordInput.value; // Good, you can combine the form values and send them through.

        modalFormExample.close(formValues);
    });
}

