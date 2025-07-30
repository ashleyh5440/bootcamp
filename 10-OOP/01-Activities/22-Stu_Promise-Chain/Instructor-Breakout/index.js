// Import readFile and writeFile from the fs/promises module. The fs/promises module exports methods that return
// promises for common file system tasks.
const { readFile, writeFile } = require('fs/promises');
const BlogPost = require('./lib/blogPost');

// TODO: First, call readFile to asynchronously read the data from data/post.json.
// readFile('./data/post.json', 'utf-8')
// .then((json) => {
//   console.log(json);
//   console.log('Received data from post.json');
//   // TODO: parse the json string and assign the resulting object to a variable
//   //
//   // TODO: Use the BlogPost class to create a new BlogPost object and use its `render()` method to return an html string.
//   //
//   // TODO: Write the html to file
//   //
// });

// async function writeHtml() {
//   const json = await readFile('./data/post.json', 'utf-8');
//   // parse the json string and assign the resulting object to a variable
//   const bookObj = JSON.parse(json);
//   // console.log(bookObj);
//   // Use the BlogPost class to create a new BlogPost object
//   const post = new BlogPost(bookObj.title, bookObj.text, bookObj.author, bookObj.createdOn);
//   // console.log(post);
//   // use its `render()` method to return an html string.
//   const html = post.render();
//   // console.log(html);

//   // Write the html to file
//   await writeFile('./dist/post.html', html,{ encoding: "utf-8"});
//   // print a message in the console only after the html file is written.
//   console.log('html written successfully');
// }
// writeHtml();

readFile('./data/post.json', 'utf-8')
.then(json => {
  // parse the json string and assign the resulting object to a variable
  const bookObj = JSON.parse(json);
  // console.log(bookObj);
  // Use the BlogPost class to create a new BlogPost object
  const post = new BlogPost(bookObj.title, bookObj.text, bookObj.author, bookObj.createdOn);

  // use its `render()` method to return an html string.
  const html = post.render();

  // Write the html to file
  return writeFile('./dist/post.html', html,{ encoding: "utf-8"});
})
.then( () => {
  console.log('html written successfully');
});


