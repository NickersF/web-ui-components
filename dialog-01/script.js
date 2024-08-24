let openDialogBtn = document.getElementById("openDialog_btn");
let dialogExample = document.getElementById("dialogExample");
let closeDialogBtn = document.getElementById("closeDialogExample_btn");

openDialogBtn.addEventListener("click", function () {
    dialogExample.show();
});

closeDialogBtn.addEventListener("click", function () {
    dialogExample.close();
});

let openModalBtn = document.getElementById("openModal_btn");
let modalExample = document.getElementById("modalExample");
let closeModalBtn = document.getElementById("closeModalExample_btn");

openModalBtn.addEventListener("click", function () {
    modalExample.showModal();
});

closeModalBtn.addEventListener("click", function () {
    modalExample.close();
});