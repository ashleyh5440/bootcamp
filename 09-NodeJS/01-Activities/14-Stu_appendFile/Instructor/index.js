// importing the file system module to read/write files
const fs = require('fs');

// appendfile adds more data to your file
// text file that appending to
// data string that we are appending
// callback function runs when we have an error and also when we don't have an error
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // err will be evaluatated to true if defined and console.error(err)
  // if err is undefined, it will be falsy and console.log("Commit logged!")
  err ? console.error(err) : console.log('Commit logged!')
);
