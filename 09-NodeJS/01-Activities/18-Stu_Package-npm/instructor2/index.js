const inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      // type of question is input from the docs
      type: 'input',
      // name is the key inside the answers object
      name: 'firstAns',
      // message is the question you want to ask
      message: 'What the last song you listened to?'
    },
    {
      // type of question is input from the docs
      type: 'input',
      // name is the key inside the answers object
      name: 'theOtherOne',
      // message is the question you want to ask
      message: 'Who are you?'
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    console.log(answers.firstAns);
    console.log(answers.theOtherOne);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });