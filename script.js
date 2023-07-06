const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");

const upperCase = document.getElementById('uppercase');
const lowerCase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols= document.getElementById('symbols');
const passBox = document.getElementById('passBox');
const bttn = document.getElementById('bttn');
const buttons = document.getElementById('buttons');

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener('input', () =>{
    sliderValue.textContent = inputSlider.value;
})

bttn.addEventListener('click', () =>{
   passBox.value = generatePassword();
})

buttons.addEventListener('click', () =>{
    passBox.value =""; 
})

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allSymbols = "!@#$%^&*";
let allNumbers = "0123456789";

function generatePassword () {
    let password = "";
    let allChars = "";

    allChars += lowerCase.checked ? lowerChars : "";
    allChars += upperCase.checked ? upperChars : "";
    allChars += symbols.checked ? allSymbols : "";
    allChars += numbers.checked ? allNumbers : "";

    if (allChars ==="" || allChars.length === 0) {
        return password;
    } 
    let i = 1;
    while(i<=inputSlider.value)
    {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
    }

    return password;
}