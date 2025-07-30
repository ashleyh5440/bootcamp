// It's done when I have initialized my repository with a package.json file by running npm init -y.

// It's done when I have installed inquirer version 8.2.4 and added it to my list of dependencies by running npm i inquirer@8.2.4.

// It's done when the application asks the user, "What is your name?"

// It's done when the application asks the user, "What languages do you know?"

// It's done when the application asks the user, “What is your preferred method of communication?"

// It's done after I have written those responses to a file.

const inquirer = require("inquirer");

inquirer
    .prompt([
        //questions
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "checkbox", //needs to accept multiple choices
            name: "languages",
            message: "What coding languages do you know?",
            choices: ["HTML", "CSS", "JavaScript"]
        },
        {
            type: "list",
            name: "communication",
            message: "What is your preferred method of communication?",
            choices: ["Email", "Phone", "Smoke signals", "Raven"]
        }
    ])
    .then((answers) => {
        //user feed back
        console.log(answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            //error prompt
        } else {
            //something else went wrong
        }
    });