// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var passwordOptions = ""
var finalPassword = ""




function generatePassword (){
  //prompt user for length they want 
  var length = prompt("Choose length of password between 8 and 128 characters.")
  console.log (length)
  //make sure length is between 8-128 and alert if not
  if (length<8 || length>128) {
    alert("Please choose between 8 and 128 characters. Click 'Generate Password' Again.")
    return
  }
  
  //confirm for types of characters user wants to include
  var lowercase = confirm ("Click OK to include lowercase letters, otherwise click Cancel.")
  var uppercase = confirm ("Click OK to include UPPERCASE LETTERS, otherwise click Cancel.")
  var num = confirm ("Click OK to include numbers, otherwise click Cancel.")
  var special = confirm ("Click OK to include special characters, otherwise click Cancel.")
  console.log(lowercase,uppercase,num,special)
  //Make sure they choose at least one type of character and alert if not
     if (!lowercase && !uppercase && !num && !special) {
      alert("Please choose at least one type of character to include in password.")
    }
    
    //based on the responses trim/build available pool of characters. add variables accordingly
    if (lowercase) {
      passwordOptions += lowercaseLetters
      }
    if (uppercase) {
      passwordOptions += uppercaseLetters
    }
    if (num) {
      passwordOptions += numbers
    }
    if (special) {
      passwordOptions += specialChar
    }
    // build password character by character  
    // generate random int within range of available chars length
    // add char to finalPassword
    // do until length===desired password length
    for (var i = 0; i < length; i++) {
      finalPassword +=(passwordOptions.charAt(Math.floor(Math.random()*passwordOptions.length)))
    }
    return finalPassword
  }

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

generatePassword
console.log(generatePassword)

writePassword
console.log(writePassword)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
