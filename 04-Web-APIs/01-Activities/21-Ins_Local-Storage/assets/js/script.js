var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");
var destressButton = document.querySelector("#destress");
var musictimeSpan = document.querySelector("#musictime");

// var musictime = localStorage.getItem("musictime") === null ? 0 : parseInt(localStorage.getItem("musictime"));
var musictime = localStorage.getItem("musictime") || 0;
musictime = parseInt(musictime);
console.log(musictime);
// show the retrieved value to user
musictimeSpan.textContent = musictime;

var count = localStorage.getItem("count");
// this way I know count will always and forever be some type of number
// by setting default values and types
if(count === null){
  count = 0;
}
else{
  count = parseInt(count); 
}

console.log(typeof count);

counter.textContent = count;

addButton.addEventListener("click", function() {
  if (count < 24) {
    // turns count into a number, can use it as a number now
    count++;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

subtractButton.addEventListener("click", function() {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

function addToMusicTime(){
  musictime++;
  musictimeSpan.textContent = musictime;
  localStorage.setItem("musictime", musictime);
}

destressButton.addEventListener("click", addToMusicTime);