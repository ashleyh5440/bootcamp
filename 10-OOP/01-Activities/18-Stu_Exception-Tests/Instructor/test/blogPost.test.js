const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // new BlogPost is the same as the constructor method
  describe('constructor', () => {
    // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
    it('should throw error when the authorName provided is less than 2 characters long.', () => {
      // callback
      const cb = () => new BlogPost("E");
      //error
      const err = new Error('Author must be at least 2 characters long.');

      // expect to throwerror
      expect(cb).toThrowError(err);
    });
    
  })
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
});
