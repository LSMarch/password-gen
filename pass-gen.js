
// Assignment Code
var generateBtn = document.querySelector("#generate");

console.log("Thaaaaaanks, I hate it")
//character arrays for randomization LOL
var lowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numChar = [1,2,3,4,5,6,7,8,9]
var specChar = [" ","!","#","$","%","&","'","(",")","*",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
var selectedChar = []

var lowerConfirm
var upperConfirm
var numConfirm
var specialConfirm



// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
//password length prompt
var lengthInput = prompt("Choose a number between 8 and 128"); 
 //console.log(lengthInput)
 var lengthNum = parseInt(lengthInput) //converts string into number
console.log(lengthNum) 
if(lengthInput < 8) {
    alert("Password must be between 8 - 128 characters");
 } else if(lengthInput > 128) {
    alert("Password must be 128 characters or less");
    //shortening prompts listed below (TRYING TO)
} else {  
    lowerConfirm = confirm("Include lowercase?")
    upperConfirm = confirm("Include uppercase?")
    numConfirm = confirm("Include numbers?")
    specialConfirm = confirm("Include special characters?")
}
//if all are negs
if(!lowerConfirm && !upperConfirm && !numConfirm && !specialConfirm) {
    alert("Password must have at least one parameter!")
} //else if()
//character type prompt(s)
var includeLow = prompt("Would you like to include lowercase? Type yes or no."); 
  includeLow = includeLow.toUpperCase();
  if(includeLow === "YES") {
    selectedChar.push(...lowChar) //push lowChar into empty selectedChar
    //console.log(selectedChar);
  }
var includeUpper = prompt("Would you like to include uppercase? Type yes or no");
  includeUpper = includeUpper.toUpperCase();
  if(includeUpper === "YES") {
    selectedChar.push(...upChar);
    //console.log(selectedChar);
  }
var includeNum = prompt("Would you like to include numbers? Type yes or no");
  includeNum=includeNum.toUpperCase();
  if(includeNum === "YES") {
    selectedChar.push(...numChar);
    //console.log(selectedChar)
  }
var includeSpecial = prompt("Would you like to include special characters? Type yes or no");
  includeSpecial = includeSpecial.toUpperCase();
  if(includeSpecial === "YES") {
    selectedChar.push(...specChar)
    //console.log(selectedChar)
  }

//randomize selected characters
var randomIndex = Math.floor(Math.random() * (lengthNum - 0) + 0);
var randomPass = selectedChar[randomIndex];
console.log(randomPass);




}//this is writePasswor() bracket

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
