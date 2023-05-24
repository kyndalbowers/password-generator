// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "0123456789";
var specialChars = "`~!@#$%^&*()_-+={}[]:;";
var allChars ="";

function generatePassword() {
  var inputPassLength = prompt("What length would you like your password to be? (8-128 characters)")
  if (inputPassLength < 8 || inputPassLength > 128) {
    alert("Length must be between 8 and 128 characters.");
  }

  var includeUpperCase = confirm("Would you like to include upper case letters?");
  var includeLowerCase = confirm("Would you like to include lower case letters?");
  var includeNumbers = confirm("Would you like to include numbers?");
  var includeSymbols = confirm("Would you like to include special characters?");
}

function randomUpper () {
  return String.randomUpper(Math.floor(Math.random() * 26) + 97);
}
function randomLower () {
  return String.lowerCaseChars(Math.floor(Math.random() * 26) + 97);
}
function randomNumber () {
  return String.numberChars(Math.floor(Math.random() * 10) + 48);
}
function randomSpecial () {
  return String.specialChars[Math.floor(Math.random() * specialChars.length)];
}

//for (var i = 0; i <= inputPassLength; i++) {
//  if confirm.includeUpperCase = true
//  }




// var selections = [];
// var genPW = "";

//passLength = parseInt(passLength);

//if(passLength < 8 || passLength> 128) {
 // alert("Password length must be between 8 and 128 characters.");}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


