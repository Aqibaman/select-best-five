function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}

function getNoNumber(inputValue) {
    if (isNaN(inputValue)) {
        alert("Please put here a valid number");
        return true;
    }
    return false;
}
function setTextElementValueById(elementFieldId, newValue) {
    const textEelment = document.getElementById(elementFieldId);
    textEelment.innerText = newValue;
}