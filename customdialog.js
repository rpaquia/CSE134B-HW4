// Custom Alert
const screenAlert = document.getElementById('alertButton');
const dialogBox = document.getElementById('alertDialog');

screenAlert.addEventListener('click', () => {
    dialogBox.showModal();
});

//Custom Confirm
const screenConfirm = document.getElementById('btn2');
const dialogConfBox = document.getElementById('confirmDialog');


screenConfirm.addEventListener('click', () => {
    dialogConfBox.showModal();
})
//Custom Prompt
dialogConfBox.addEventListener('close', () => {
    let text = dialogConfBox.value;
})
