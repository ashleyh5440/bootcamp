
  // TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
  // forward slash + * + * + enter
/**
 * For a website blog post
 */
class BlogPost{
  /** 
   * Creates a BlogPost object
   * @param {string} authorName 
   * @param {string} title 
   * @param {string} text 
   * @param {string} createdOn 
   */
  constructor(authorName, title, text, createdOn){
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    // // can create a dynamic comments array here
    // this.comments = [];
  }

  // or create comments here
  // TODO: Give BlogPost a property called 'comments' that is set to an empty array.
  comments = [];
  

  // TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.
  /**
   * Prints meta stuff from object
   */
  printMetaData() {
    console.log(`Create by ${this.authorName} on ${this.createdOn}`);
  }

  // TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.
  /**
   * Adds a comment
   */
  addComment(comment){
    this.comments.push(comment);
    console.log(this.comments);
  }
}
// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', 'createdOn', and 'reaction'.
/**
 * Comment class for Blogpost
 */
class Comment{
  /**
   * creates a blog post
   * @param {string} authorName 
   * @param {string} text 
   * @param {string} createdOn 
   * @param {string} reaction 
   */
  constructor(authorName, text, createdOn, reaction){
    this.authorName = authorName ;
    this.text = text;
    this.createdOn = createdOn;
    this.reaction = reaction;
  }
  // TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) (reaction)'.
  /**
   * Prints meta info for comment
   */
  printMetaData(){
    console.log(`Created by ${this.authorName} on ${this.createdOn} ${this.reaction}`);
  }
}


module.exports = {
  Comment,
  BlogPost
}