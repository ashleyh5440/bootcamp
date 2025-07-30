var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
function increment(){
  // increases count by 1
  count++;

  // executes the setCounterText to show the count to the user
  setCounterText();
}

// executes increment on every click to the increment button
incrementEl.addEventListener("click", increment);

// TODO: Add event listener to decrement button 
function decrement(){
  // * It's done when a user clicks on the decrement button and, if the count is greater than `0`, the count is decreased by `1`.
  if(count > 0){
    // decreases count by 1
    count--;

    // executes the setCounterText to show the count to the user
    setCounterText();
  }
}
// executes decrement on every click to the decrement button
decrementEl.addEventListener("click", decrement);