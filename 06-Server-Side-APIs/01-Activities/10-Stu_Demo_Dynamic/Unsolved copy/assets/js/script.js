var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);

      // TODO: Loop through the data and generate your HTML
      for(var i = 0; i < data.length; i++){
        //create element
        // var loginEl = document.createElement("p");
        // var linkEl = document.createElement("p");
        var loginEl = document.createElement("a"); //makes them links

        //create text and attributes
        // loginEl.textContent = data[i].login;
        // linkEl.textContent = data[i].html_url;
        loginEl.textContent = data[i].login;
        loginEl.setAttribute("href", data[i].html_url); //adds the link to a tag

        //append to userContainer
        // userContainer.appendChild(loginEl);
        // userContainer.appendChild(linkEl);
        userContainer.appendChild(loginEl);
      }
    });
}
fetchButton.addEventListener('click', getApi);
