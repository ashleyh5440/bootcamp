// db connection file using dotenv
const inquirer = require('inquirer');
const startConnection = require('./db/connection');
let db = null;

// function to capture input data
async function captureInput(){
  // looking at the schema file, 
  // I can see that I need to capture the name
  // id is automatically populated by AUTO_INCREMENT
  // Since we only have 1 column to fill in,
  // we need to only ask 1 question.
  console.log("need to finish");
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who do you want to put on the island?"
      }
    ]);
  // these are the answers from the user prompt
  console.log(answers);

  // once you confirm that you have the answers you need
  // send the answers to your insert function
  return await insertSql(answers);
}
// function to do the sql insert
async function insertSql(inputs){
  // console.log(inputs);

  // use prepared_statement
  const idata = await db.query("INSERT INTO island SET ?", inputs);
  console.log(idata);

  console.log("Insert Successful\n\n\n\n");

  // bring us back to the menu
  return await menu();
}


async function askWhoToBringToUsa(){
  // looking at the schema file, 
  // I can see that I need to capture the name
  // id is automatically populated by AUTO_INCREMENT
  // Since we only have 1 column to fill in,
  // we need to only ask 1 question.
  console.log("need to finish");
  // data is the list of objects or list of rows
  // metaData constains data like column names etc
  // destructure simplifies return
  const [data, metaData] = await db.query("SELECT * FROM island");

  console.log(data);
  const choices = data.map( row => (
    {
      name: row.name,  // name is what the user will see as a choice for your question
      value: row.id // value is what you want to save into your database for island_id
    }
  ) );
  console.log(choices);

  const answers = await inquirer
    .prompt([
      {
        type: "list",
        name: "island_id",
        message: "Who do you want to bring back to the usa?",
        choices: choices
      }
    ]);
  // these are the answers from the user prompt
  console.log(answers);

  // once you confirm that you have the answers you need
  // send the answers to your insert function
  return await sendSqlUSA(answers);
}
// function to do the sql insert
async function sendSqlUSA(inputs){
  // console.log(inputs);

  // use prepared_statement
  const idata = await db.query("INSERT INTO usa SET ?", inputs);
  console.log(idata);

  console.log("Insert Successful\n\n\n\n");

  // bring us back to the menu
  return await menu();
}

// menu function
// exit function

async function menu() {
  const answers = await inquirer.prompt([{
    type: 'list',
    message: "What do you want to do next?",
    name: 'option',
    choices: ["send someone to island",
  "send someone from island to usa"]
  }]);

  switch(answers.option){
    case 'send someone to island':
      return captureInput();
    case 'send someone from island to usa':
      return askWhoToBringToUsa();
  }
}

// start/init function
// where your whole program begins
async function init() {
  // connect to database
  db = await startConnection();

  const results = await db.query('SELECT * FROM island');

  // get data from results
  console.log(results[0]);

  await menu();
}
init();