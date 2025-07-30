var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;// event.target is the thing you clicked on

  // TODO: Complete function
  // matches tests which child I am clicking on
  // .box is a selector for a child
  if(element.matches('.box')){
    console.log(element);

    // element.dataset.number;
    // element.getAttribute("data-number");
    var num = element.dataset.number;
    var state = element.dataset.state; // element.getAttribute("data-state")

    if(state === "hidden"){
      element.textContent = num;
      element.setAttribute("data-state", "visible"); // element.dataset.state = "visible";
    }
    else{
      element.textContent = '';
      element.setAttribute("data-state", "hidden"); // element.dataset.state = "hidden";
    }
    // data- is the beginning of every single data attribute
    // data-whatever , whatever can be any name you choose
  }
});
