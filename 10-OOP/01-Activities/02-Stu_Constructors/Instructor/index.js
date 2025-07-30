// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
// object constructor names start with an uppercase first letter
// normal func names start with a lowercase first letter
function BlogPost(authorName, title, text, createdOn){
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  // TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'
  // this.printMetaData = () => console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  // this.printMetaData = function(){
  //   console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  // }
}

// // fat arrows don't work for prototypes
// BlogPost.prototype.printMetaData = () => console.log(`Created by ${this.authorName} on ${this.createdOn}`);
BlogPost.prototype.printMetaData = function () {
  console.log(`Created by ${this.authorName} on ${this.createdOn}`)
};

// TODO: Create a new object using the 'BlogPost' constructor
const post = new BlogPost("Mr. Smith", "Matrix isn't real", "You just believe me.", "Aug 2001");

// TODO: Call the 'printMetaData()' method on the new object
post.printMetaData();