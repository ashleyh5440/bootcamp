class Validate {}

// Validate.prototype.isPassword = (password) => {
//   if(password.length < 8){
//     // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
//     return false;
//   }
//   // if there is no uppercase
//   else if(!(/[A-Z]+/.test(password))){
//     // "Aaaaaaa"
//   // else if(!(password.split('').filter( ch => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(ch)).length > 0 )){
//     return false;
//   }
  
//   // if there is no lowercase
//   else if(!(/[a-z]+/.test(password))){
//     return false;
//   }
//   // if there is no number
//   else if(!(/[0-9]+/.test(password))){
//     return false;
//   }
//   else{
//     return true;
//   }
//   // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number. It should return true if it does, and false if not.
// };

Validate.prototype.isPassword = (password) => {
  // step 2 : optimize
  // if(password.length >= 8 && /[A-Z]+/.test(password) && /[a-z]+/.test(password) && /[0-9]+/.test(password)){
  //   return true;
  // }
  // else {
  //   return false;
  // }

  // step 3 : looking at output
  return password.length >= 8 && /[A-Z]+/.test(password) && /[a-z]+/.test(password) && /[0-9]+/.test(password);

  // additional steps possible... - Quote Opal
};

module.exports = Validate;
