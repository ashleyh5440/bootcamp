var passwordBtnEl = $('#password-btn'); //this was originally a class, it should be an id to reflect the html
var passwordDisplayEl = $('#password-display');

// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

passwordBtnEl.on('dblclick', function () {
  var newPassword = passwordGenerator(15);//number of characters
  passwordDisplayEl.text(newPassword);
});
