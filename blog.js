
let items = JSON.parse(localStorage.getItem("blog-list")) || [];


// Function that adds items to blog 
function addItem() {
    // gets value that is put inside <input> with querySelector
    let inputTitleBox = document.querySelector('nameInput');
    let inputSumBox = document.querySelector('sumInput');
    let titleItem = inputBox.value;
    let summaryItem = inputBox.value;

    // If either input is empty return and alert user
    if(titleItem === "") {
        return alert("Please enter Title");
    }
    if(summaryItem === "") {
        return alert("Please enter Summary");
    }

    // If inputs are valid, add them to array
    items.push({
        value: titleItem, summaryItem,
        time: new Date().toLocaleDateString("en-US"),
    });

    // convert to a string with JSON.stringify and save to localStorage
    localStorage.setItem("blog list", JSON.stringify(items));

    // Call function to list all blog items
    listItems();

    //clear all input boxes
    inputTitleBox.value = "";
    inputSumBox.value = "";
}





//------------Code for opening dialog box------------
const screenAddBtn = document.getElementById('addBtn');
const addDialogPopup = document.getElementById('addDiagBox');
const output = document.getElementById('out'); 
screenAddBtn.addEventListener('click', () => {
    addDialogPopup.showModal();
});
addDialogPopup.addEventListener('close', () => {
    output.value;
});

