//prompts w/password criteria
  //length 8-128 characters, prompt
  //character types (lowercase, uppercase, numeric, and/or special characters)
    //confirm()
  
console.log("Here we go!");
// password length prompt
// var passLength = prompt("Choose a number between 8-128");
var lowerChar = ["abcdefghijklmnopqrstuvwxyz"];
var upperChar = "ABCDEFGHIJKLMNOPQRSTYVWXYZ";
var numChar = 1234567890;
//var specialChar = "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  alert("Let's make a password!")
  // password length prompt
var passLength = prompt("Choose a number between 8-128");
  if(passLength < 8){
    alert("Password must be at least 8 characters");
  } else if(passLength > 128) {
    alert("Password must be no more than 128 character");
  } else {
  
    //input acceptable length, move to confirms (unnest??)
    var lowerConfirm = prompt("Include lowercase? Type yes or no");
      if(lowerConfirm ==="yes"||"Yes"||"YES") {
        lowerConfirm = lowerChar;
      } 
    var upperConfirm = prompt("Include uppercase? Type yes or no");
      if(upperConfirm === "yes"||"Yes"||"YES") {
        upperConfirm = upperChar;        
      }
    var numConfirm = prompt("Include numbers? Type yes or no")
      if(numConfirm === "yes" || "Yes"||"YES") {
        numConfirm = numChar
      }
    var specialConfirm = prompt("Include special characters? Type yes or no");
      if(specialConfirm === "yes"||"Yes"||"YES") {
        specialConfirm = specialChar
      }
  
      //confrim("Okay, next question. Include uppercase?")
      }
      //var upperChar = confirm("Include uppercase?");   
  }

  //character type confirms
  //var lowerChar = confrim("Include lowercase?");

  

 // var password = generatePassword();
 // var passwordText = document.querySelector("#password");

 // passwordText.value = password;

//}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
