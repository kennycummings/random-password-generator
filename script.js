// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate a random password
function writePassword() {
  
// Prompt for password length
var length = prompt("How many characters would you like your password to be? Choose between 8 and 128 characters.");

// Validate and sanitize the input
length = parseInt(length, 10);
if (isNaN(length) || length < 8 || length > 128) {
  alert("Please enter a valid number between 8 and 128.");
  return;
}

// Confirm prompts for character types
var includeLowercase = confirm("Include lowercase characters?");
var includeUppercase = confirm("Include uppercase characters?");
var includeNumeric = confirm("Include numeric characters?");
var includeSpecialChars = confirm("Include special characters?");

// Ensure at least one character type is selected
if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecialChars)) {
  alert("Please select at least one character type.");
  return;
}

var charset = "";
if (includeLowercase) {
  charset += "abcdefghijklmnopqrstuvwxyz";
}
if (includeUppercase) {
  charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if (includeNumeric) {
  charset += "0123456789";
}
if (includeSpecialChars) {
  charset += "!@#$%^&*()_-+=<>?/";
}

// Generate the random password
var password = "";
for (var i = 0; i < length; i++) {
  var randomIndex = Math.floor(Math.random() * charset.length);
  password += charset.charAt(randomIndex);
}

// Display the generated password
var passwordText = document.querySelector("#password");
passwordText.value = password;

// Optional: Copy to clipboard button
var copyBtn = document.querySelector("#copy");
if (copyBtn) {
  copyBtn.style.display = "block";
  copyBtn.addEventListener("click", function () {
    passwordText.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
    });
  }
}


//User input: presses generate password button
//Window popup: "How many characters would you like your password to be? Choose between 8 and 128 characters."
//Prompts: lowercase, uppercase, numeric, and/or special characters
//Generate a password within said parameters
//Diplay said password
//Optional: copy to clipboard button
