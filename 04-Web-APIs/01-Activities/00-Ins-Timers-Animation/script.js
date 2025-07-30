console.log("test");
var gameBarEl = document.getElementById("game-bar");
var timerEl = document.getElementById("timer");
// select/create the node
var decreaseEl = document.querySelector(".decrease");

var timeLeft = 100;
var timerInterval = setInterval(function () {
  timeLeft--;
  gameBarEl.style.backgroundColor = "red";
  gameBarEl.style.height = (timeLeft / 100 * 60) + "vh";
  gameBarEl.style.width = "100vw";
  console.log(timeLeft);
  timerEl.textContent = timeLeft;
  if(timeLeft <= 0){
    clearInterval(timerInterval);
  }
}, 1000);

// function to do after click
function decreaseTime(){
  timeLeft -= 10;
  // timeLeft = timeLeft - 10;
}
// addEventListener
decreaseEl.addEventListener("click", decreaseTime);