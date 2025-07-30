// TODO: Add a comment describing what kind of function this is
// constructor to create a type of object
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}


const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
);


// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// prototype is declaring a method separate from the constructor
BlogPost.prototype.addComment = function(comment) {
  this.comments.push(comment);
};

post.addComment('Nice post, I like it!');

// TODO: Add a comment describing what you expect to see printed in the console
console.log(post.comments);
