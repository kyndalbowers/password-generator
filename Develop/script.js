// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "0123456789";
var specialChars = "`~!@#$%^&*()_-+={}[]:;";
var selections = "";

function generatePassword() {

  var inputPassLength = prompt("What length would you like your password to be? (8-128 characters)")
  if (inputPassLength < 8 || inputPassLength > 128) {
    alert("Length must be between 8 and 128 characters.");
  }

  var includeUpperCase = confirm("Would you like to include upper case letters?");
  var includeLowerCase = confirm("Would you like to include lower case letters?");
  var includeNumbers = confirm("Would you like to include numbers?");
  var includeSymbols = confirm("Would you like to include special characters?");


const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
const numberOptions = "0123456789".split("");
const specialCharacters = "`~!@#$%^&*()_-+={}[]:;".split("");

  if (includeUpperCase) {
    for (var x = 0; x < upperCaseLetters.length; x++) {
      selections += upperCaseLetters;
    }
  }
  if (includeLowerCase) {
    for (var x = 0; x < lowerCaseLetters.length; x++) {
    selections += lowerCaseLetters;
  }
}
  if (includeNumbers) {
    for (var x = 0; x < numberOptions.length; x++) {
      selections += numberOptions;
  }
}
  if (includeSymbols) {
    for (var x = 0; x < specialCharacters.length; x++) {
      selections += specialCharacters;
  }
  }
  console.log(selections);  

  const arr = selections.split("");
  const shuffled = arr.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0,inputPassLength);
  selected.join("");

  console.log(selected); 

  let text = selected.toString();

  console.log(text); 
    }
  








  




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);