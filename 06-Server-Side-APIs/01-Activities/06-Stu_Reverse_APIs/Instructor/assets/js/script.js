var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
// most likely it is an array of objects or a parse json
// You will need jquery to use the AJAX function
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
// response.json() will parse the array or objects from the response
// console.log(data) will print out the parsed data from the response
// fetch is promised based (waiting for an event to complete, and will return a promise object)
// .then will execute when the event completes
fetch(requestUrl)
  // step 1 parse the json data from response
  .then(function (onlyavar) {
    return onlyavar.json();
  })
  // step 2 use the resulting array or object on your website
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
// this is the original way of doing fetches from a server side api
// however, this is based on the state of the request and is generally extremely difficult to use
// it will return a string which requires a lot more processing
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
// ajax - already parsed base on content-type
// fetch - 2 steps, just use the json to parse the data out
// xhr - stateful response, there is a string but it requires a lot more processing esp when there are errors
