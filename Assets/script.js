// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

//my code
//user input prompts
  var inputPassLength = prompt("What length would you like your password to be? (8-128 characters)")
  if (inputPassLength < 8 || inputPassLength > 128) {
    return alert("Length must be between 8 and 128 characters.");
  }

  var includeUpperCase = confirm("Would you like to include upper case letters?");
  var includeLowerCase = confirm("Would you like to include lower case letters?");
  var includeNumbers = confirm("Would you like to include numbers?");
  var includeSymbols = confirm("Would you like to include special characters?");

//defining constants
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberOptions = "0123456789";
const specialCharacters = "`~!@#$%^&*()_-+={}[]:;";
var selections = [];

//if statements to select characters
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

//randomize the order of selected characters
const arr = selections.split("");
const shuffled = arr.sort(() => 0.5 - Math.random());
let selected = shuffled.slice(0,inputPassLength);

console.log(selected);

//convert selected characters from array to string
var newPasscode = selected.join("");
console.log(newPasscode);

//call function to push generated password to document
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
