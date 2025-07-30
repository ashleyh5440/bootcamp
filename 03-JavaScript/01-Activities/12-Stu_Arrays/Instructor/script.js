// WRITE YOUR CODE HERE
var studentNames = ["Yu", "Tom Woods", "Allie Rotello"];

console.log(studentNames.length);

// console.log("Welcome to the class " + studentNames[0]);
// console.log("Welcome to the class " + studentNames[1]);
// console.log("Welcome to the class " + studentNames[2]);
// i++ // i+=1 // i = i + 1 
// initial; conditional to continue; increment or stepping
for(var i = 0; i < studentNames.length; i += 1){
  console.log("Welcome to the class " + studentNames[i]);
}

var replacementStudent = "Turtle"
studentNames[0] = replacementStudent;

if(studentNames[0] === replacementStudent){
  console.log(replacementStudent + " is in the class");
}
