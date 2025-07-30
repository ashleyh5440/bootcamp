const inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'first',
      message: "What is the first answer?"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });