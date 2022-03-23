
//prompts w/password criteria
//declare variables
  //var lengthInput, prompt, string
  //var lowerChar, confirm, boolean
  //var upperChar, confirm, boolean
  //var numChar, confirm, boolean
  //var specialChar, confirm, boolean
  
//arrays for character types (lowercase, uppercase, numeric, and special characters)
//create function generatePassword()
//create random function, Math.floor(Math.random())

//use conditionals
  //lif(lengthInput < 8) {alert("NOPE")}
  //if(!lowerConfirm && the rest....) {alert("NEED SOMETHING")}

//create empty array for final password choices
//join selected arrays
//must have at least one character from each array
//array.join(array1)

console.log("Thaaaaaanks, I hate it")
//character arrays for randomization LOL
var lowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//can run lowChar array through .toUpperCase??
var numChar = [0,1,2,3,4,5,6,7,8,9]
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specChar = [" ","!","#","$","%","&","'","(",")","*",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
var selectedChar

var lowerConfirm //boolean
var upperConfirm //boolean
var numConfirm //boolean
var specialConfirm //boolean
var lengthInput //string, parseInt()

//password length prompt
lengthInput = prompt("Choose a number between 8 and 128"); 
 //console.log(lengthInput)
 var lengthNum = parseInt(lengthInput) //converts string into number
console.log(lengthNum) 
if(lengthInput < 8 || lengthInput > 128) { 
    alert("Password must be between 8 - 128 characters");
    //return null
 } else if(lengthInput > 128) {
    alert("Password must be 128 characters or less");
    //return null
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
} 

//if all confirmed
if(lowerConfirm && upperConfirm && numConfirm && specialConfirm) {
  selectedChar = lowChar.concat(upperChar, numChar, specChar)
  console.log(selectedChar)  
} 

//if 3 confirmed
if(lowerConfirm && numConfirm && specialConfirm) {
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
if (lowerConfirm && upperConfirm) {
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
if (lowerConfirm) {
  selectedChar = lowChar
} else if (upperConfirm) {
  selectedChar = upperChar
} else if (numConfirm) {
  selectedChar = numChar
} else if (specialConfirm) {
  selectedChar = specChar
}



//randomize selected characters
for(var i = 0; i < lengthNum; i++) {
  
}

// var randomIndex = Math.floor(Math.random() * (lengthNum - 0) + 0);
// var randomPass = selectedChar[randomIndex];



  //==============================================================================================

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { //displays on page for user
  var password = generatePassword(); //all code will go in here
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword) 
