// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
class ForumItem {
  constructor(authorName, text, createdOn){
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem{
  constructor(authorName, title, text, createdOn) {
    // super will run the constructor and will have all the same inputs as ForumItem constructor
    super(authorName, text, createdOn); // in place of ForumItem.call for classes
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(authorName, text, createdOn, reaction) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
    this.reaction = reaction;
  }
}

// TODO: Create a new object using the Comment class constructor.
const firstComment = new Comment("Luffy", "I love Luffy so much", "May 5", "Birthday Hat");

// TODO: Create a new object using the BlogPost class constructor.
const luffyPost = new BlogPost("Angel", "I Don't Love Luffy", "I'm kidding! I really do like Luffy!", "May 6th");

// TODO: Log both newly created BlogPost and Comment to the console.
console.log({firstComment, luffyPost});