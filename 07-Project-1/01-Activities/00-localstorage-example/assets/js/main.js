console.log("connected test is good.");

// find the form on the page
var cityForm = document.querySelector("#city-form");
// var cityForm = $('#city-form');
var cityField = document.querySelector("#input-city");
// var cityField = $('#input-city');
// selected the element
var buttonList = document.getElementById("list-of-buttons");
// var buttonList = $('#list-of-buttons');

var cities = [];

if(localStorage.getItem("cities")){ // null is also falsy
  // use parse to read in array instead of a string
  // using the cities item in localstorage to change my cities variable to have all cities
  cities = JSON.parse(localStorage.getItem("cities"));
  renderCities();
}

function renderCities(){

  buttonList.innerHTML = '';//clear the list before adding buttons
  // buttonList.html(''); // jquery

  for(var i = 0; i < cities.length; i++){
    var city = cities[i];
    // create
    var liEl = document.createElement("li");
    var buttonEl = document.createElement("button");
    //attr/text
    buttonEl.setAttribute("data-city", city);
    buttonEl.setAttribute("class", "button");
    buttonEl.textContent = city;

    //append
    // buttonList will be the parent of li
    buttonList.appendChild(liEl);
    // li will be the parent of button
    liEl.appendChild(buttonEl);
    // <li>
    //   <button class="button" data-city="New York">New York</button>
    // </li>
  }
}

// event listener/handler/function
function captureCity(event){
  // stop refreshing
  event.preventDefault();
  console.log(event);
  console.log(event.target);

  firstFetch(cityField.value);

  // add a new element on the right side of array
  cities.push(cityField.value);

  if(cities.length > 2){
    cities.shift();// remove the first element on left of array
  }

  // localStorage only supports strings
  // stringify will help us store a string into localstorage under "cities"
  localStorage.setItem("cities", JSON.stringify(cities));

  renderCities();

  // jquery value capture
  // firstFetch(cityField.val());
}



function firstFetch(city){
  var searchUrl = 'https://api.giphy.com/v1/gifs/search';
  var apiKey = '?api_key=RANHjz2L1Drs7AUTUKTyWRWnP2iuiQpy'; //first_parameter
  var additionOptions = '&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips'; // added by api explorer
  var cityParam = "&q=" + city;
  var url = searchUrl + apiKey + additionOptions + cityParam;
  console.log(url);
  fetch(url)// promise based
  .then(function(response){
    return response.json(); // parse the response data
  })
  .then(function(data) { // data should be an array or an object
    console.log(data);
    for(var i = 0; i < data.data.length; i++){
      console.log(data.data[i].images.original.url);
      var giphy = data.data[i].images.original.url;
      // create
      var imgEl = document.createElement('img');
      // var imgEl = $('<img>');

      // attr/text
      imgEl.setAttribute('src', giphy);
      // imgEl.attr('src', giphy);

      // append
      document.querySelector('#city-giphy').appendChild(imgEl);
      // $('#city-giphy').append(imgEl);

      // <section class="column is-half" id="city-giphy">
        
      // </section>

      secondFetch(city);
    }
    
    
  })
}



function secondFetch(city){
  var searchUrl = 'https://api.giphy.com/v1/gifs/search';
  var apiKey = '?api_key=RANHjz2L1Drs7AUTUKTyWRWnP2iuiQpy'; //first_parameter
  var additionOptions = '&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips'; // added by api explorer
  var cityParam = "&q=" + city + "+spongebob";
  var url = searchUrl + apiKey + additionOptions + cityParam;
  console.log(url);
  fetch(url)// promise based
  .then(function(response){
    return response.json(); // parse the response data
  })
  .then(function(data) { // data should be an array or an object
    console.log(data);
    for(var i = 0; i < data.data.length; i++){
      console.log(data.data[i].images.original.url);
      var giphy = data.data[i].images.original.url;
      // create
      var imgEl = document.createElement('img');
      // var imgEl = $('<img>');

      // attr/text
      imgEl.setAttribute('src', giphy);
      // imgEl.attr('src', giphy);

      // append
      document.querySelector('#sponge-giphy').appendChild(imgEl);
      // $('#sponge-giphy').append(imgEl);

      // <section class="column is-half" id="sponge-giphy">
        
      // </section>

    }
    
    
  })
}


// addEventListener
cityForm.addEventListener("submit", captureCity);

// event listener/handler/function
function handleButtonClick(event){
  event.preventDefault();

  // event.target is the button that you click on
  console.log(event.target);

  // event delegation
  // make sure it is a button
  if(event.target.matches('button')){
    // <button class="button" data-city="New York">New York</button>
    var city = event.target.getAttribute("data-city");

    // call firstFetch with city as input
    firstFetch(city);
  }
}

//addEventListener
buttonList.addEventListener("click", handleButtonClick);

// // jQuery event delegation
// // event listener/handler/function
// function handleButtonClick(event){
//   event.preventDefault();

//   // this is the button that you click on
//   console.log(this);

//   var city = this.attr("data-city");

//   // call firstFetch with city as input
//   firstFetch(city);
// }

// //addEventListener ("on")
// // event delegation
// // make sure it is a button  
// buttonList.on("click", "button", handleButtonClick);