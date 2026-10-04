// const color = document.querySelector('.radio-form');

// console.dir(color);

// color.addEventListener('radio' onFormRadio);

// function onFormRadio(col) {
//     col.preventDefault();
//     const colorElement = col.currentTarget.elements;
//     const colorType = colorElement.currentTarget.value;
//     console.log(colorType);
//     const colorData = new FormData(col.currentTarget);
//     console.log(colorData);
//     colorData.forEach((value) => console.log(value));
// }

const refs = {
    inputElement: document.querySelector('input#name-input');
    outputElement: document.querySelector('span#name-output');
}
console.log(refs.inputElement);
const {inputElement, outputElement} = refs;

inputElement.addEventListener('changeName', onInputElementName);

function onInputElementName(name) {
    console.log(name.currentTarget.value);
    console.log(outputElement);
    outputElement.textContent = name.currentTarget.value;
}