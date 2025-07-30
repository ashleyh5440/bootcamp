// select/create
const crazyButton = document.querySelector("#crazy");
const gameElement = document.querySelector("#game");
let popcorn = 0;

//function
function goCrazy(event){
  // "event.target" is the crazy button, the original one at the top
  // only do something when something is there
  if(event.target.getAttribute("data-actual") === "putSpongebob"){
    // clear the screen
    gameElement.innerHTML = '';
    // do something
    // create the tag
    var imgElement = document.createElement("img");

    // attributes/text
    imgElement.setAttribute("src","spongebob-lifting.gif");
    imgElement.setAttribute("alt", "Spongebob");

    //append
    gameElement.appendChild(imgElement);
  }
  else if(event.target.getAttribute("data-actual") === "createPopcorn"){
    // clear the screen
    gameElement.innerHTML = '';
    // create the tag
    var btnElement = document.createElement("button");

    // attributes/text
    btnElement.textContent = "Pop popcorn";

    //append
    gameElement.appendChild(btnElement);

    //function
    function popIt(){
      popcorn += Math.floor(Math.random() * 10);
      document.querySelector("#popcorn").textContent = popcorn + " popcorns";
    }

    //addEventListener
    btnElement.addEventListener("click", popIt);
    
    // create the tag
    var pElement = document.createElement("p");

    // attributes/text
    pElement.textContent = popcorn + " popcorns";
    pElement.setAttribute("id", "popcorn");

    //append
    gameElement.appendChild(pElement);

  }
  else if(event.target.getAttribute("data-actual") === "multiplyCrazyButton"){
    function createCrazyButton(){
      //create
      var btnElement = document.createElement("button");

      //attr/text
      var randomness = ["putSpongebob", "multiplyCrazyButton", "createPopcorn"];
      btnElement.setAttribute("data-actual", randomness[Math.floor(Math.random() * randomness.length)])
      btnElement.textContent = "Other Crazy Button";

      //append
      gameElement.appendChild(btnElement);

      //function
      var minifunc = goCrazy;

      //addEventListener
      btnElement.addEventListener("click", minifunc);
    }
    createCrazyButton();
  }
  else{
    // clear the screen
    gameElement.innerHTML = '';

    var randomness = ["putSpongebob", "multiplyCrazyButton", "createPopcorn"];
    event.target.setAttribute("data-actual", randomness[Math.floor(Math.random() * randomness.length)]);
  }
}

//addEventListener
crazyButton.addEventListener("click", goCrazy);