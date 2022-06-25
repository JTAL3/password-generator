// Assignment code here
// user prompts for setup instructions
function generatePassword() {
  var passLength = window.prompt("Choose a password length between 8 and 128 characters.");
  if (passLength <8 || passLength>128){
    alert("Your number is not between 8 and 128 characters.");
    return generatePassword();
  }
  
  if (isNaN(passLength)) {
    alert("Please use a number.");
    return generatePassword();
  }

  var lowercase = window.confirm("Do you want to include lowercase letters?");
  var uppercase = window.confirm("Do you want to include uppercase letters?");
  var numbers = window.confirm("Do you want to include numbers?");
  var specialchar = window.confirm("Do you want to include special characters?");

  //array to wrap numbers
  var chosenOptions = []
  if (lowercase) {
    chosenOptions.push(lowRandom)
  };
  if (uppercase) {
    chosenOptions.push(upperRandom)
  };
  if (numbers) {
    chosenOptions.push(numRandom)
  };
  if (specialchar) {
    chosenOptions.push(charRandom)
  };

  

  //password randomizer
  for (var i = 0; i < passLength; i++) {
    password += chosenOptions[Math.floor(Math.random() * chosenOptions.length)]();
}


// return call. Check back for text area error
return password;
}


//random string calculations for each parameter
function lowRandom() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 64);
}

function upperRandom() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 64);
}

function numRandom() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 32);
}

function charRandom() {
  var charicons = "<>?=_)(*&^%@$!#";
  return charicons[Math.floor(Math.random())];
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
