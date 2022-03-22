//prompt w/password criteria
  //length 8-128 characters
  //character types (lowercase, uppercase, numeric, and/or special characters)

console.log("Here we go!");

//OBJECTS ARE YOUR FRIEND

var numChar = prompt("Number of Characters?"); //input from user number of characters



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
