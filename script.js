//prompts w/password criteria
  //length 8-128 characters, prompt
  //character types (lowercase, uppercase, numeric, and/or special characters)
    //confirm()
  
console.log("Here we go!");
// password length prompt
// var passLength = prompt("Choose a number between 8-128");



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  // password length prompt
var passLength = prompt("Choose a number between 8-128");
  if(passLength < 8){
    alert("Password must be at least 8 characters");
  } else if(passLength > 128) {
    alert("Password must be no more than 128 character");
  } 

  //character type confirms
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
