const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
    {
      type: 'list',
      name: 'language',
      message: 'What is your second language?',
      // choices: [
      //   'choice1',
      //   'choice2'
      // ]
      choices: [
        {
          name: "Japanese",
          value: ["jpn"]
        },
        {
          name: "Portuguese",
          value: {
            id: 2,
            code: "prt"
          }
        }
      ]
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!', JSON.stringify(response, null, 2))
      : console.log('You forgot your password already?!')
  );
