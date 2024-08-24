
let state = {
    name: "",
    birthday: "",
    zipcode: 0
};

console.log("Hello World");
let saveBtn = document.getElementById("saveButton");
let nameInput = document.getElementById("petOwnerName");

function handleSave() {
    console.log('save button was clicked');
    state.nameInput.value;
    console.log("Added name" + state.name);
}