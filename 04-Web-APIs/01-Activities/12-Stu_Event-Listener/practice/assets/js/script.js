var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count"); //DOM element

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
function increment() {
  count++
  setCounterText();
}

incrementEl.addEventListener('click', increment)
// TODO: Add event listener to decrement button 
function decrement() {
  if(count > 0) {
    count--;
    setCounterText();
  }
}

decrementEl.addEventListener('click', decrement)
