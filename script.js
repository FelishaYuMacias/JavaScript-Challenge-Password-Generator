// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables
var finalPassword =""
var length = 0
var uppercase = true
var lowercase = true
var special = true



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  function generatePassword (){
    //TODO: prompt user for length
    prompt ("Choose length of password between 8 and 128 characters.").to
    //TODO: check legth
    //TODO: confirm for types of characters
    //TODO: store the responses
    //TODO: based on the responses trim/build available pool of characters
    //TODO: build password letter by letter
    //TODO: generate random int within range of available chars length
    //TODO: add char to finalPassword
    //TODO: do until length===desired password length

    return finalPassword
  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
