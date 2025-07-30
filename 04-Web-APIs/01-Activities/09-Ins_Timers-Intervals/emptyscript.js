// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 11;

// function decrementSeconds() { // repeats a function a set number of milliseconds
//   secondsLeft--; // 10
//   timeEl.textContent = secondsLeft + " seconds left till colorsplosion."; // put it on the page

//   if(secondsLeft === 0) {
//     // stop repetition of the interval
//     // Stops execution of action at set interval
//     clearInterval(timerInterval);
//     // Calls function to create and append image
//     // sendMessage();
//   }

// }

function setTime() {

  // Sets interval in variable
  var timerInterval = setInterval( function () { // repeats a function a set number of milliseconds
    secondsLeft--; // 10
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion."; // put it on the page
  
    if(secondsLeft === 0) {
      // stop repetition of the interval
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  
  }, 1000); // 1000 milliseconds = 1 second
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  // create
  var imgEl = document.createElement("img");
  // attribute/text
  imgEl.setAttribute("src", "images/image_1.jpg");
  // append
  mainEl.appendChild(imgEl);

}

setTime();