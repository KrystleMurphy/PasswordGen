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

//get the user answers
function getPasswordOptions() {
  //length prompt
  var length = parseInt(prompt("How many characters would you like your password to contain?"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid entry. Please enter a number between 8 and 128.");
    return null;
  }

  //character types
  var includeLowerCase = confirm("Would you like to include lower case letters?");
  var includeUpperCase = confirm("Would you like to include upper case letters?");
  var includeNumeric = confirm("Would you like to include numbers?");
  var includeSpecial = confirm("Would you like to include special characters?");
  if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial) {
    alert("Invalid selections. You must select at least one character type.");
    return null;
  }
  var userAnswers = {
    length: length,
    includeLowerCase: includeLowerCase,
    includeUpperCase: includeUpperCase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial
  };
  return userAnswers;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
//create a function that randomises, and will be reuseable
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}
//take the user answers and generate the password

function generatePassword() {
  var options = getPasswordOptions();
  var combinedChars = [];
  var guarenteedChars = [];
  var results = [];

  if (lowerCase) {
    combinedChars = combinedChars.concat(lowerCase);
    guarenteedChars.push(getRandom(lowerCase));
  }

  if (upperCase) {
    combinedChars = combinedChars.concat(upperCase);
    guarenteedChars.push(getRandom(upperCase));
  }

  if (numbers) {
    combinedChars = combinedChars.concat(numbers);
    guarenteedChars.push(getRandom(numbers));
  }

  if (special) {
    combinedChars = combinedChars.concat(special);
    guarenteedChars.push(getRandom(special));
  }

  // Randomize the possible character combinations
  for (var i = 0; i < options.length; i++) {
    var randomChar = getRandom(combinedChars);
    results.push(randomChar);
  }

  // Add the guaranteed characters to the results array
  results = results.concat(guarenteedChars);

  // Join the elements of the results array into a string
  var password = results.join("");

  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Once all prompts are answered, the password should be generated and displayed in an alert or written to the page.
