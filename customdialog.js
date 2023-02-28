// Custom Alert
const screenAlert = document.getElementById('alertButton');
const dialogBox = document.getElementById('alertDialog');

screenAlert.addEventListener('click', () => {
    dialogBox.showModal();
});

//Custom Confirm
const screenConfirm = document.getElementById('confirmDialog');
const dialogConfBox = document.getElementById('btn2');

screenConfirm.addEventListener('click', () => {
    dialogConfBox.showModal();
})
//Custom Prompt

