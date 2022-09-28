// Assignment Code
var generateBtn = document.querySelector("#generate");
//Added var to help with repetition later.
var numCharacters = "Choose length of password between 8 and 128 characters."
//Added array so can create a for loop for DRY
var characters = ["lowercase letters", "UPPERCASE letters", "numbers", "special characters"]

//Created function so prompts would happen at button click.
function create(){
    //Added prompt for password length
 prompt(numCharacters) 
// {
//  if (prompt(numCharacters))>==8 && <==128 {
//   text = "Great Choice"
// }
// else {
//   text = "Your password needs to be between 8 and 128 characters."
// }
// }
  //Added for loop for other questions and to avoid having to repeat code 4x
  for (var i = 0; i < 4; i++) {
confirm("Click OK to include " + characters[i] + ", otherwise click Cancel.");
}
}

// for if (confirm("Click OK to include " + characters + " otherwise click Cancel.") == true) {
//   text = "I'll include it!";
// } else {
//   text = "It won't be included.";
// }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
