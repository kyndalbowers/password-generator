// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "0123456789";
var specialChars = "`~!@#$%^&*()_-+={}[]:;";
var allChars ="";

function generatePassword() {
  var lengthPrompt = prompt("What length would you like your password to be? (8-128 characters)")
  if (passLength -- null) {
    alert("Response cannot be blank.  Please enter a number value.");
  } else if (passLength < 8 || passLength >128) {
    alert("Length must be between 8 and 128 characters.");
  }
}

var includeLowerCase - confirm("Would you like to include lower case letters?");
var includeUpperCase - confirm("Would you like to include upper case letters?");
var includeNumbers - confirm("Would you like to include numbers?");
var includeSymbols - confirm("Would you like to include special characters?");
var selections = [];
var genPW = "";

passLength = parseInt(passLength);

if(passLength < 8 || passLength> 128) {
  alert("Password length must be between 8 and 128 characters.");
}

console.log(passLength);
console.log(includeLowerCase);
console.log(includeUpperCase);
console.log(includeNumbers);
console.log(includeSymbols);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


