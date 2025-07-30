const { BlogPost, Comment } = require('./models');

// TODO: Create a new object using the Comment class constructor.
const firstComment = new Comment("Rex", "Cool and confusing", "Tomorrow", "Confused");

// TODO: Create a new object using the BlogPost class constructor.
const post = new BlogPost("Bob", "Constructors and Commentary", "Constructors are weird with commentary", "Today");

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.
post.addComment(firstComment);

// TODO: Print the meta data for both the BlogPost and the Comment to the console.
firstComment.printMetaData();
post.printMetaData();

console.log(post);