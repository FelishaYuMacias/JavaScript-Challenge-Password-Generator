// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = ["lowercase letters", "uppercase letters", "numbers", "special characters"]

prompt("Choose length of password between 8 and 128 characters.");

for (var i = 0; i < 5; i++) {
confirm("Click OK to include " + charcters + " otherwise click Cancel.");

// if (confirm("Click OK to include " + charcters + " otherwise click Cancel.") == true) {
//   text = "I'll include it!";
// } else {
//   text = "It won't be included.";
// }
}

// confirm("Click OK to include UPPERCASE letters otherwise click Cancel.");

// confirm("Click OK to include numbers otherwise click Cancel.");

// confirm("Click OK to include special characters otherwise click Cancel.");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
