console.log("connected");
var button1 = document.querySelector('[data-next="1"]');
var button2 = document.querySelector('[data-next="2"]');
var button3 = document.querySelector('[data-next="3"]');
var pages = document.querySelectorAll(".page");

function goToPage1(){
  pages.forEach(function (page){
    page.style.display = "none";
  });
  
  document.querySelector("#page-1").style.display="block";
}

function goToPage2(){
  pages.forEach(function (page){
    page.style.display = "none";
  });
  document.querySelector("#page-2").style.display="block";

}

function goToPage3(){
  pages.forEach(function (page){
    page.style.display = "none";
  });
  document.querySelector("#page-3").style.display="block";
}

button1.addEventListener("click", goToPage1);
button2.addEventListener("click", goToPage2);
button3.addEventListener("click", goToPage3);