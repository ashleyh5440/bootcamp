// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
function BlogPost (authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.printMetaData = function () {
        console.log("Created by " + authorName + " on" + createdOn + ".");
    }
}

// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)' <--lines 7-9

// TODO: Create a new object using the 'BlogPost' constructor
const blogPost = new BlogPost("Poe", "The Raven", "Quoth the Raven 'Nevermore'", "Like 100 years ago");

// TODO: Call the 'printMetaData()' method on the new object
