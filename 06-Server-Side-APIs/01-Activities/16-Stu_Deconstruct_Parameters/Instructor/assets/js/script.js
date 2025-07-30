fetch(
  // Explain each parameter in comments below.
  // per_page number of results per page
  // state=open looks for issues that are open
  // sort=created sorted by created datetime
  // direction=desc sort in descending (newest on top), ascending (oldest on top)
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
  // 
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
