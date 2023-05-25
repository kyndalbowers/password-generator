// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "0123456789";
var specialChars = "`~!@#$%^&*()_-+={}[]:;";

function generatePassword() {

  var inputPassLength = prompt("What length would you like your password to be? (8-128 characters)")
  if (inputPassLength < 8 || inputPassLength > 128) {
    alert("Length must be between 8 and 128 characters.");
  }

  var includeUpperCase = confirm("Would you like to include upper case letters?");
  var includeLowerCase = confirm("Would you like to include lower case letters?");
  var includeNumbers = confirm("Would you like to include numbers?");
  var includeSymbols = confirm("Would you like to include special characters?");

for (var i = 0; i <= inputPassLength; i++) {
  var generatedPassword ="";

  if (confirm.includeUpperCase = true) {
    var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var randomUpper = (Math.floor(Math.random() * upperCaseChars.length));
    generatedPassword += randomUpper;
  }
  if (confirm.includeLowerCase = true) {
    var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    var randomLower = (Math.floor(Math.random() * lowerCaseChars.length));
    generatedPassword += randomLower;
  }
  if (confirm.includeNumbers = true) {
    var numberChars = "0123456789";
    var randomNumber = (Math.floor(Math.random() * numberChars.length));
    generatedPassword += randomNumber;
  }
  if (confirm.includeSymbols = true) {
    var specialChars = "`~!@#$%^&*()_-+={}[]:;";
    var randomSpecial = (Math.floor(Math.random() * specialChars.length));
    generatedPassword += randomSpecial;
  }
}
console.log(generatedPassword)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);