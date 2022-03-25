
//character arrays
var lowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//can run lowChar array through .toUpperCase??
var numChar = [0,1,2,3,4,5,6,7,8,9]
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specChar = [" ","!","#","$","%","&","'","(",")","*",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
var selectedChar

//for confrim pop-ups
var lowerConfirm //boolean
var upperConfirm //boolean
var numConfirm //boolean
var specialConfirm //boolean
var lengthInput //string, parseInt() to make integer


function generatePassword () {
//password length prompt
lengthInput = prompt("Choose a number between 8 and 128");  
 var lengthNum = parseInt(lengthInput) 
console.log(lengthNum) 
if(lengthInput < 8 || lengthInput > 128) { 
    alert("Password must be between 8 - 128 characters");    
    return null    
} else {  
    lowerConfirm = confirm("Include lowercase?")
    upperConfirm = confirm("Include uppercase?")
    numConfirm = confirm("Include numbers?")
    specialConfirm = confirm("Include special characters?")
}

//if all are negs

if(!lowerConfirm && !upperConfirm && !numConfirm && !specialConfirm) {
  alert("Password must have at least one parameter!")
  return null
} 
//if all confirmed

else if(lowerConfirm && upperConfirm && numConfirm && specialConfirm) {
  selectedChar = lowChar.concat(upperChar, numChar, specChar)
  //console.log(selectedChar)  
} 
//if 3 confirmed

else if(lowerConfirm && numConfirm && specialConfirm) {
  selectedChar = lowChar.concat(numChar, specChar)
  //console.log(selectedChar)
} else if(lowerConfirm && upperConfirm && specialConfirm) {
  selectedChar = lowChar.concat(upperChar, specChar)
  //console.log(selectedChar)
} else if(lowerConfirm && upperConfirm && numConfirm) {
  selectedChar = lowChar.concat(upperChar, numChar)
  //console.log(selectedChar)
} else if(upperConfirm && numConfirm && specialConfirm) {
  selectedChar = upperChar.concat(numChar, specChar)
   //console.log(selectedChar)
}
//if 2 confirmed

else if (lowerConfirm && upperConfirm) {
  selectedChar = lowChar.concat(upperChar)
} else if (lowerConfirm && numConfirm){
  selectedChar = lowChar.concat(numChar)
} else if (lowerConfirm && specialConfirm) {
  selectedChar = lowChar.concat(specChar)
} else if (upperConfirm && numConfirm) {
  selectedChar = upperChar.concat(numChar)
} else if (upperConfirm && specialConfirm) {
  selectedChar = upperChar.concat(specChar)  
} else if(numConfirm && specialConfirm) {
  selectedChar = numChar.concat(specChar)
}
//if 1 confirmed

else if (lowerConfirm) {
  selectedChar = lowChar
} else if (upperConfirm) {
  selectedChar = upperChar
} else if (numConfirm) {
  selectedChar = numChar
} else if (specialConfirm) {
  selectedChar = specChar
} else {
   return null
}

//created var to hold choices to make an array
var dasPassword = []

//randomize selected characters
for(var i = 0; i < lengthNum; i++) {
  //choices will hold the number of randomly selected characters user has chosen  
   var choices = selectedChar[Math.floor(Math.random() * (selectedChar.length - 0) + 0)]     
   dasPassword.push(choices)
}

//new variable to change array to string
var pw = dasPassword.join("")

//console.log(pw)
return pw
} //generatePassword end

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { //displays on page for user
  var password = generatePassword() ; 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
