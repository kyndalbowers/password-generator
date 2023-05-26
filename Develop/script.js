// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  //my code
  var inputPassLength = prompt("What length would you like your password to be? (8-128 characters)")
  if (inputPassLength < 8 || inputPassLength > 128) {
    alert("Length must be between 8 and 128 characters.");
  }

  var includeUpperCase = confirm("Would you like to include upper case letters?");
  var includeLowerCase = confirm("Would you like to include lower case letters?");
  var includeNumbers = confirm("Would you like to include numbers?");
  var includeSymbols = confirm("Would you like to include special characters?");

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberOptions = "0123456789";
const specialCharacters = "`~!@#$%^&*()_-+={}[]:;";
var selections = [];

if (includeUpperCase) {
      selections += upperCaseLetters;
  }

if (includeLowerCase) {
      selections += lowerCaseLetters;
  }

if (includeNumbers) {
      selections += numberOptions;
  }

if (includeSymbols) {
      selections += specialCharacters;
  }

console.log(selections);  

const arr = selections.split("");
const shuffled = arr.sort(() => 0.5 - Math.random());
let selected = shuffled.slice(0,inputPassLength);

console.log(selected);

var newPasscode = selected.join("");
console.log(newPasscode);

writePassword();

// Write password to the #password input
function writePassword() {
  var password = newPasscode;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
