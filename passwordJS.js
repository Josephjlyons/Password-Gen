// DOM 

const slider = document.getElementById("slider");
const upperCaseEl = document.getElementById("uppercase");
const lowerCaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const displayEl = document.getElementById("display");



// Function For Password Available Inputs

function getAvailableCharacters() {
    let characters = "";
    if (upperCaseEl.checked == true) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowerCaseEl.checked == true) {
        characters += "abcdefghijklmnopqrstuvwxyz";

    } if (numberEl.checked == true) {
        characters += "1234567890";

    } if (symbolEl.checked == true) {
        characters += "!@#$%^&*()_+=\[]";
    }
    return characters;
}

// Password Generating Function

function generate() {
    let length = slider.value;
    let password = "";
    let values = getAvailableCharacters();



    for (var i = 0; i < length; i++) {
        password += values.charAt(Math.floor(Math.random() * Math.floor(values.length)));

    }
    document.getElementById("display").value = password;

}
generate();