// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables
var finalPassword = ""
var length = 0
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  function generatePassword (){
    //prompt user for length
    var userChoice = prompt("Choose length of password between 8 and 128 characters.")
    console.log (length)
    //TODO: check length (between 8-128)
    if (userChoice<8 || userChoice>128) {
      alert("Please choose between 8 and 128 characters.")
     }
    //TODO: confirm for types of characters
    
     //Added for loop for other questions and to avoid having to repeat code 4x
 function options() {
  var characters = ["lowercase letters", "UPPERCASE letters", "numbers", "special characters"]for (var i = 0; i < 4; i++) {
    confirm("Click OK to include " + characters[i] + ", otherwise click Cancel.")
 } 

 }
    console.log (options)
    function store (characters) {
      if (characters[0]) {
        // include lowercase
      }
      if (characters[1]) {
        //include uppercase
      }
      if (characters[2]) {
       //include numbers
      }
      if (characters[3])
        //include special characters
    }
    //TODO: store the responses- should have a series of booleans
    //TODO: based on the responses trim/build available pool of characters. add variables accordingly
    //TODO: build password character by character

    //TODO: generate random int within range of available chars length
    //TODO: add char to finalPassword
    //TODO: do until length===desired password length

    return finalPassword
  }

generatePassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
