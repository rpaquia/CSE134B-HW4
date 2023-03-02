
let items = JSON.parse(localStorage.getItem("todo-list")) || [];


// Function that adds items to blog 
function addItem() {
    // gets value that is put inside <input> with querySelector
    let inputBox = document.querySelector()

}

//------------Code for opening dialog box------------
const screenAddBtn = document.getElementById('addBtn');
const addDialogPopup = document.getElementById('addDiagBox');
const output = document.getElementById('out'); 
screenAddBtn.addEventListener('click', () => {
    addDialogPopup.showModal();
});
addDialogPopup.addEventListener('close', () => {
    
});