// Array of special characters to be included in password
var special = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  // Get the button element
  const catButton = document.getElementById('generate');

  // Add event listener to the button
  catButton.addEventListener('click', showPrompt);

}


// Length of password:
// At least 8 characters but no more than 128.
var passwordLength = prompt("Please enter the desired length of your password (between 8 and 128 characters):");

// changing code to only move on one the conditions are all met - using the while instead of if statement forces the prompt to keep looping until a suitable entry has been made
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Invalid entry. Please enter a number between 8 and 128.");
  passwordLength = prompt("Invalid length. Please enter a number between 8 and 128:");
}


// Present a series of prompts for password criteria:
// Character types - adding confirms for: Lowercase, Uppercase, Numeric, Special characters ($@%&*, etc.)

var includeLowerCase = confirm('Would you like to include lower case letters?')
if (includeLowerCase === true) {
  console.log('Password to include lower case letters');

} else {
  console.log('Password not to include lower case letters');
}

var includeUpperCase = confirm('Would you like to include upper case letters?')
if (includeUpperCase === true) {
  console.log('Password to include upper case letters');

} else {
  console.log('Password not to include upper case letters');
}
var includeNumeric = confirm('Would you like to include numbers?')
if (includeNumeric === true) {
  console.log('Password to include numbers');

} else {
  console.log('Password not to include numbers');
}
var includeSpecial = confirm('Would you like to include Special characters?')
if (includeSpecial === true) {
  console.log('Password to include special characters');

} else {
  console.log('Password not to include special characters');
}


// Code should validate for each input and at least one character type should be selected.

var atLeastOneTrue = false;

if (includeLowerCase || includeUpperCase || includeNumeric || includeSpecial) {
  atLeastOneTrue = true;
}

console.log("At least one character type has been used:", atLeastOneTrue);


// Function for getting a random element from an array


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



// Once all prompts are answered, the password should be generated and displayed in an alert or written to the page.



var password = ""; // Initialize an empty string to store the generated password


// Function to generate password with user input
function generatePassword() {
}

var combinedChars = "";

if (includeLowerCase) {
  combinedChars += lowerCase.join('');
}

if (includeUpperCase) {
  combinedChars += upperCase.join('');
}

if (includeNumeric) {
  combinedChars += numbers.join('');
}

if (includeSpecial) {
  combinedChars += special.join('');
}

var passwordCharacterOptions = combinedChars.length;

// console.log(passwordCharacterOptions);

for (var i = 0; i < passwordLength; i++) {
  password += combinedChars.charAt(Math.floor(Math.random() * passwordCharacterOptions));
}

console.log(password);
