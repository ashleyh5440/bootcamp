console.log("connected");
var mainEl = $('main');

var userUrl = 'https://api.github.com/users/';

var userName = 'octocat';

function firstFetch(user){
  fetch(userUrl + user)// promise based
  .then(function(response){
    return response.json(); // parse the response data
  })
  .then(function(data) { // data should be an array or an object
    console.log(data);
    var image = data.avatar_url;
    var repoUrl = data.repos_url;
    // create
    var imgEl = $('<img>');

    // text/attr
    imgEl.attr({
      alt: "avatar",
      src: image
    })

    // append
    mainEl.append(imgEl);

    reposFetch(repoUrl);
    
  })
}

function reposFetch(url){
  fetch(url)// promise based
  .then(function(response){
    return response.json(); // parse the response data
  })
  .then(function(data) { // data should be an array or an object
    console.log(data); // repo data

    for(var i = 0; i < data.length; i++){
      console.log(data[i].name);

      var name = data[i].name;

      // create
      var pEl = $('<p>');

      // text/attr
      pEl.text(name);

      // append
      mainEl.append(pEl);

    }
  })
}
firstFetch(userName);