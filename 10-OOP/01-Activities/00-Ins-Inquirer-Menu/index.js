// menu
// html
// maps and other functional loops
// functions???

const userData = {};

// import inquirer
const inquirer = require('inquirer');

// htmlwriter
const htmlWriter = async (data) => {
  return `<html><body>${data.title}</body></html>`;
} 

// widgetfunc - write a piece of html
const widgetMaker = async() => {
  // ask some questions here...
  // makes something here
  // placeholder
  return userData.title = 'Turtle';
}

// menu
const menu = async () => {
  console.log("menu");
  // promises are async, you can do .then *OR* you can do async
  // // promise based
  // inquirer.prompt([
  //   {
  //     type: 'list',
  //     name: 'menuChoice',
  //     message: "What do you want to do?",
  //     choices: [
  //       {
  //         name: "Continue",
  //         value: "continue"
  //       },
  //       {
  //         name: "Exit",
  //         value: "exit"
  //       },
  //     ]
  //   }
  // ])
  // .then((answers) => {
  //   console.log(answers);
  // })
  // async functions allow you to use await (put async in front of function)
  // put await in front of anything asynchronous
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'menuChoice',
      message: "What do you want to do?",
      choices: [
        {
          name: "Turtle Widget",
          value: "turtle"
        },
        {
          name: "Exit",
          value: "exit"
        },
      ]
    }
  ]);

  switch(answers.menuChoice){
    // each option should be a case
    case 'turtle':
      // menu(); // don't need to wait for a value... just go into menu
      await widgetMaker(); // if you need the return, put await // safe choice // i would use this for the homework
      // after every case, put break
      return await menu(); // go back to menu until all data is in, you can also send the user to the next widget maker.
      break;
    case 'exit':
      // process.exit(); // only if you want to exit right away
      return;
  }

}

// init - generally the last function in a file, it will start the entire program
const init = async () => {
  console.log(inquirer);
  await menu();
  console.log(await htmlWriter(userData));
}
init();

