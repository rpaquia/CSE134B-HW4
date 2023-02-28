// Custom Alert
const screenAlert = document.getElementById('alertButton');
const dialogBox = document.getElementById('alertDialog');

screenAlert.addEventListener('click', () => {
    dialogBox.showModal();
});

//Custom Confirm
const screenConfirm = document.getElementById('btn2');
const dialogConfBox = document.getElementById('confirmDialog');
const outputVal = document.getElementById('out');

screenConfirm.addEventListener('click', () => {
    dialogConfBox.showModal();
});
dialogConfBox.addEventListener('close', () => {
    outputVal.value = `ReturnValue: ${dialogConfBox.returnValue}.`;
});

//Custom Prompt
