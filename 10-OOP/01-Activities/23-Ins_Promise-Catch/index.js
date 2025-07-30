const inquirer = require('inquirer');
const fetch = require('node-fetch');

inquirer
  .prompt({
    type: 'input',
    name: 'username',
    message: 'Enter a Github Username:',
  })
  .then((res) => { 
    // throw Error("Stuff happens");
    return fetch(`https://api.github.com/users/${res.username}`)
  })
  .then((res) => {
    // throw Error("Stuff happens 2");
    return res.json()
  })
  .then((user) => console.log(user))
  // Promises execution will rout to the '.catch()' callback when an error occurs in any of the promises from before.
  .catch((err) => console.log("I am here", err));
