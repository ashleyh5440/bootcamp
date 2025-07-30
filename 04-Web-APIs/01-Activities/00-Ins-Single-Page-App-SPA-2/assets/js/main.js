console.log("connected");
// this should only show up when going to page 1
var endMessage = "Going back to the beginning!";
var h1El = document.querySelector(".page > h1");
var pEl = document.querySelector(".page > p");
var mainEl = document.querySelector(".page");
var buttonClass = "page-turner";


var h1Data = [
  "Turtles also regulate the energy flow of a given environment.",
  "They live in beautiful and interesting environments.",
  "They can live a very long time."
];

var headingIndex = 0;

var nextPage = function(event) {
  var button = event.target;
  // event delegation requires matches
  if(button.matches("." + buttonClass)){
    console.log(event);
    console.log(event.target);
    var next = button.getAttribute("data-next-page");
    next = parseInt(next);
    if(next === 0){
      alert(endMessage);
    }

    headingIndex = next;
    renderH1();
  }
}

mainEl.addEventListener("click", nextPage);

var renderH1 = function() {
  h1El.textContent = h1Data[headingIndex];
  
  // clear out previous
  pEl.innerHTML='';
  //create
  var buttonEl = document.createElement("button");

  //text/attr
  var next = (headingIndex + 1);
  if(next >= h1Data.length){
    next = 0;
  }
  buttonEl.textContent = "Turn to Page " + (next + 1);
  buttonEl.setAttribute("data-next-page", next);
  buttonEl.classList.add(buttonClass);

  //append (something on the page)
  pEl.append(buttonEl);
}

renderH1();


// var button1 = document.querySelector('[data-next="1"]');
// var button2 = document.querySelector('[data-next="2"]');
// var button3 = document.querySelector('[data-next="3"]');
// var pages = document.querySelectorAll(".page");

// function goToPage1(){
//   pages.forEach(function (page){
//     page.style.display = "none";
//   });
  
//   document.querySelector("#page-1").style.display="block";
// }

// function goToPage2(){
//   pages.forEach(function (page){
//     page.style.display = "none";
//   });
//   document.querySelector("#page-2").style.display="block";

// }

// function goToPage3(){
//   pages.forEach(function (page){
//     page.style.display = "none";
//   });
//   document.querySelector("#page-3").style.display="block";
// }

// button1.addEventListener("click", goToPage1);
// button2.addEventListener("click", goToPage2);
// button3.addEventListener("click", goToPage3);