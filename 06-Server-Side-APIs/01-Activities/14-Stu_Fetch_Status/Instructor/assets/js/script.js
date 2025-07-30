var badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';

var responseText = document.getElementById('response-text');
// var responseText = $('#response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      // Check the console first to see the response.status
      console.log(response.status);
      // Then write the conditional based on that response.status value
      // if / else
      // Make sure to display the response on the page
      // create
      // text/attr
      // append

      if(response.status != 200){
        // text
        responseText.textContent = response.status;
        // responseText.text(response.status);
      }

      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(badRequestUrl);
