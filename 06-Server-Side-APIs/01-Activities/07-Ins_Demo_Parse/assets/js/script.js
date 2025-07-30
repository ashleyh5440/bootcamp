fetch('https://api.github.com/orgs/facebookresearch/repos')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Facebook Research Repos: Raw repo data \n----------');
    console.log(data);
  });

fetch('https://api.github.com/orgs/twitter/repos')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Twitter Repositories: Names only \n----------');
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }
  });
