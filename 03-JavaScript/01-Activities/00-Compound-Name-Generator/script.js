console.log("connected");
var endNames = ["obby", "aul", "ary", "onny"];
var startLetters = "bpms";

var wholeName = startLetters[0] + endNames[0];
// use up all starting letters
for(var i = 1; i < startLetters.length; i++){
  wholeName += "-" + startLetters[i] + endNames[i];
}

// // google how to randomly select an integer in javascript
// // use up all starting letters
// for(var i = 0; i < 8; i++){
//   wholeName += "-" + startLetters[Math.floor(Math.random() * startLetters.length)] + endNames[Math.floor(Math.random() * endNames.length)];
// }

console.log(wholeName);

