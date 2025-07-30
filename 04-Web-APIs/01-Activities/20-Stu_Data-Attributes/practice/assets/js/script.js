var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function

  // matches tests which child I'm clisking on
  // .box is a selector for a child
  if(element.matches(".box")) {


    element.dataset.number;
    var num = element.dataset.number;
    var state = element.dataset.state;

    if(state === "hidden") {
      // show the number
      element.textContent = num;
      element.setAttribute("data-state", "visible");
    }
    else {
      // hide the number
      element.textContent = "";
      element.setAttribute("data-state", "hidden");
    }
  }
});

// data- is the beginning of every data attribute
// data-whatever <-- whatever can be any name you choose, is going to be in the html