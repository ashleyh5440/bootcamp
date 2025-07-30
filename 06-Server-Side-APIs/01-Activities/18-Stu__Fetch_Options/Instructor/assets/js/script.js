var options = {
  cache: "reload",
  headers: {
    "Content-Type": "application/json"
  }
};

fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', options)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
