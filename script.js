//prompts w/password criteria
  //length 8-128 characters, prompt
  //character types (lowercase, uppercase, numeric, and/or special characters)
    //confirm()
  
console.log("Here we go!");

// Character arrays for randomization
var lowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numChar = [1,1,2,3,4,5,6,7,8,9,0]
var specChar = [" ","!","#","$","%","&","'","(",")","*",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
var selectedChar = []


// // password length prompt
// // var passLength = prompt("Choose a number between 8-128");
// var lowerChar = ["abcdefghijklmnopqrstuvwxyz"];
// var upperChar = "ABCDEFGHIJKLMNOPQRSTYVWXYZ";
// var numChar = 1234567890;
// //var specialChar = "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// >>>>>>> 99d911dc6dcb249e381d9edca1816513ad41aaa9

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  alert("Let's make a password!")
  // password length prompt
var lengthInput = prompt("Choose a number between 8-128");//get number between 8-128
  lengthInput = lengthInput.toUpperCase();//changes input string to all uppercase
  if(lengthInput < 8){
    alert("Password must be at least 8 characters");
  } else if(lengthInput > 128) {
    alert("Password must be no more than 128 character");

  } 
  //character type confirms
var includeLow = prompt("Would you like to include lowercase? Type yes or no.") ;
  includeLow = includeLow.toUpperCase();
  if(includeLow === "YES") {
    selectedChar.push(...lowChar)
    console.log(selectedChar);
  }
var includeUpper = prompt("Would you like to include uppercase? Type yes or no");
  includeUpper = includeUpper.toUpperCase();
  if(includeUpper === "YES") {
    selectedChar.push(...upChar);
    console.log(selectedChar);
  }
var includeNum = prompt("Would you like to include numbers? Type yes or no");
  includeNum=includeNum.toUpperCase();
  if(includeNum === "YES") {
    selectedChar.push(...numChar);
    console.log(selectedChar)
  }
var includeSpecial = prompt("Would you like to include special characters? Type yes or no");
  includeSpecial = includeSpecial.toUpperCase();
  if(includeSpecial === "YES") {
    selectedChar.push(...specChar)
    console.log(selectedChar)
  }
  
  //now what? 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

//   } else {
  
//     //input acceptable length, move to confirms (unnest??)
//     var lowerConfirm = prompt("Include lowercase? Type yes or no");
//       if(lowerConfirm ==="yes"||"Yes"||"YES") {
//         lowerConfirm = lowerChar;
//       } 
//     var upperConfirm = prompt("Include uppercase? Type yes or no");
//       if(upperConfirm === "yes"||"Yes"||"YES") {
//         upperConfirm = upperChar;        
//       }
//     var numConfirm = prompt("Include numbers? Type yes or no")
//       if(numConfirm === "yes" || "Yes"||"YES") {
//         numConfirm = numChar
//       }
//     var specialConfirm = prompt("Include special characters? Type yes or no");
//       if(specialConfirm === "yes"||"Yes"||"YES") {
//         specialConfirm = specialChar
//       }
  
//       //confrim("Okay, next question. Include uppercase?")
//       }
//       //var upperChar = confirm("Include uppercase?");   
//   }

//   //character type confirms
//   //var lowerChar = confrim("Include lowercase?");

  

//  // var password = generatePassword();
//  // var passwordText = document.querySelector("#password");
// >>>>>>> 99d911dc6dcb249e381d9edca1816513ad41aaa9

 // passwordText.value = password;

//}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);}
